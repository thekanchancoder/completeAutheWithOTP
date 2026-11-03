import mongoose from "mongoose";
import { refreshToken } from "../controllers/auth.controllers.js";

const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [ true, "User reference is required" ],
  },
  refreshTokenHash: {
    type: String,
    required: [ true, "Refresh token hash is required" ],
  },
  ip: {
    type: String,
    required: [ true, "IP address is required" ],
  },
  userAgent: {
    type: String,
    required: [ true, "User agent is required" ],
  },
  revoked: {
    type: Boolean,
    default: false,
    },

}, { timestamps: true });

const SessionModel = mongoose.model("Session", sessionSchema);
export default SessionModel;