import authConfig from "./auth.config.js";
import mongoose from "mongoose";
const connectToDatabase = async () => {
  await mongoose.connect(authConfig().mongoUri);
  console.log("Connected to MongoDB");
};

export default connectToDatabase;