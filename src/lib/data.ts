import { Products, User } from "./models";
import { connectToDb } from "./utils";

export const FetchUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");

  const itemsPerPage = 4;
  try {
    await connectToDb();
    const userCount = await User.find({
      fullName: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ fullName: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { userCount, users };
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};

export const FetchSingleUser = async (id: string) => {
  try {
    await connectToDb();

    const user = User.findById(id);
    return user;
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};

export const FetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");

  const itemsPerPage = 4;
  try {
    await connectToDb();
    const productCount = await Products.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Products.find({ title: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { productCount, products };
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};

export const FetchSingleProduct = async (id: string) => {
  try {
    await connectToDb();

    const product = Products.findById(id);
    return product;
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};
