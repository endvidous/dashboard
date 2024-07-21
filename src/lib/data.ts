import { Products, User } from "./models";
import { connectToDb } from "./utils";

export const FetchUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");

  const itemsPerPage = 2;
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

export const FetchProducts = async (q: string, page: number) => {
  try {
    await connectToDb();
    const productCount = Products.find().countDocuments();
    const products = await Products.find();
    return { productCount, products };
  } catch (error: any) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};
