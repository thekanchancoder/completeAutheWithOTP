import { config } from "dotenv";
config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}
if(!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

const authConfig = () => {
  const mongoUri = process.env.MONGO_URI;
  const jwtSecret = process.env.JWT_SECRET;
  return { mongoUri, jwtSecret };
}

export default authConfig;