import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB failed to connect", error);
  }
};

export default connectDB;
