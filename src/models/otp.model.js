import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [ true, "Email is required"],
  },
  otpHash: {
    type: String,
    required: [ true, "OTP Hash is required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [ true, "User ID is required"],
  },
  
} , { timestamps: true }); 

const OTPModel = mongoose.model('OTP', otpSchema);

export default OTPModel;