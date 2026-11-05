import { config } from "dotenv";
config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}
if(!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

if(!process.env.GOOGLE_CLIENT_ID) {
  throw new Error("GOOGLE_CLIENT_ID is not defined in the environment variables");
}
if(!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("GOOGLE_CLIENT_SECRET is not defined in the environment variables");
}
if(!process.env.GOOGLE_REFRESH_TOKEN) {
  throw new Error("GOOGLE_REFRESH_TOKEN is not defined in the environment variables");
}
if(!process.env.GOOGLE_USER) {
  throw new Error("GOOGLE_USER is not defined in the environment variables");
}

const authConfig = () => {
  const mongoUri = process.env.MONGO_URI;
  const jwtSecret = process.env.JWT_SECRET;
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const googleUser = process.env.GOOGLE_USER;
  return { mongoUri, jwtSecret, googleClientId, googleClientSecret, googleRefreshToken, googleUser };
}

export default authConfig;