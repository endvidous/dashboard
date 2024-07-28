import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

type Connection = {
  isConnected?: number;
};

const connection: Connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }

    const mongoURI: string = process.env.MONGO as string;
    const db = await mongoose.connect(mongoURI);

    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
};
