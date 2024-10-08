"use server";
import { revalidatePath } from "next/cache";
import { Products, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import argon2 from "argon2";
import { uploadImage } from "./cloudinary";
import { signIn } from "../app/auth";

export const addUser = async (formData: FormData) => {
  const {
    fullName,
    email,
    password,
    phoneNo,
    address,
    isAdmin,
    isActive,
    img,
  } = Object.fromEntries(formData);

  try {
    connectToDb();
    const hashedPassword = await argon2.hash(password as string, {
      type: argon2.argon2id,
    });

    const imageUrl =
      img instanceof File && img.size > 0
        ? await uploadImage(img as File, "users")
        : null;

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      phoneNo,
      address,
      isAdmin,
      isActive,
      img: imageUrl,
    });

    await newUser.save();
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const {
    id,
    fullName,
    email,
    password,
    phoneNo,
    address,
    isAdmin,
    isActive,
    img,
  } = Object.fromEntries(formData);

  try {
    await connectToDb();

    const updates: { [key: string]: any } = {
      fullName,
      email,
      password,
      phoneNo,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updates).forEach(
      (key) =>
        (updates[key] === "" || updates[key] === undefined) &&
        delete updates[key]
    );

    if (img instanceof File && img.size > 0) {
      updates.img = await uploadImage(img as File, "users");
    }
    if (password) {
      updates.password = await argon2.hash(password as string, {
        type: argon2.argon2id,
      });
    }

    await User.findByIdAndUpdate(id, updates);
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const { title, description, price, size, weight, stock, category, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const imageUrl =
      img instanceof File && img.size > 0
        ? await uploadImage(img as File, "users")
        : null;

    const newProduct = new Products({
      title,
      description,
      price,
      size,
      weight,
      stock,
      category,
      img: imageUrl,
    });

    await newProduct.save();
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const { id, title, description, price, size, weight, stock, category, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const updates: { [key: string]: any } = {
      title,
      description,
      price,
      size,
      weight,
      stock,
      category,
    };

    Object.keys(updates).forEach(
      (key) =>
        (updates[key] === "" || updates[key] === undefined) &&
        delete updates[key]
    );

    if (img instanceof File && img.size > 0) {
      updates.img = await uploadImage(img as File, "products");
    }

    console.log(id);
    await Products.findByIdAndUpdate(id, updates);
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Products.findByIdAndDelete(id);
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState: any, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
    });
  } catch (error: any) {
    if (error.cause?.provider.includes("credentials")) {
      return error.cause.err.message;
    }
    throw error;
  }
};
