import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Username not provided"],
      unique: [true, "Username is Taken, please choose another username"],
    },
    firstName: {
      type: String,
      required: [true, "Firstname not provided"],
    },
    lastName: {
      type: String,
      required: [true, "Lastname not provided"],
    },
    middlename: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: [true, "Email not provided"],
      unique: [true, "You can only have one account"],
    },
    gender: {
      type: Object,
      required: [true, "Gender not provided"],
    },
    password: {
      type: String,
      required: [true, "Password not provided"],
      // select: false,
    },
    profilePhoto: {
      type: String,
      required: false,
      default:
        "https://res.cloudinary.com/dsxbt6phu/image/upload/v1685543867/images_g4uh8r.png",
    },
    country: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    stateOrProvince: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    mobileNumber: {
      type: String,
      required: false,
    },
    department: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    schoolname: {
      type: String,
      required: false,
    },
    schoolId: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of Birth not provided"],
    },
    schoolCountry: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    faculty: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    websiteUrl: {
      type: String,
      required: false,
    },
    acc: {
      student: { type: Boolean, default: true, required: false },
      staff: { type: Boolean, default: false, required: false },
    },
    occupation: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    businessURL: {
      type: String,
      required: false,
    },
    businessName: {
      type: String,
      required: false,
    },
    occupationStatus: {
      value: { type: String, required: false },
      label: { type: String, required: false },
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getSignedToken = function () {
  return jwt.sign(
    { id: this._id, accountType: this.acc },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
    this.resetPasswordExpire = Date.now()+10 * (60 * 1000);
  return resetToken;
};

export default mongoose.model("User", userSchema);
