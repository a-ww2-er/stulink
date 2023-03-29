import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    stateOrProvince: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },

    dept: {
      type: String,
      required: false,
    },
    schoolname: {
      type: String,
      required: false,
    },
    schoolID: {
      type: String,
      required: false,
    },
    schoolCountry: {
      type: String,
      required: false,
    },
    faculty: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    acc: {
      type: String,
      enum: ["regular", "moderator"],
      default: "regular",
    },
    occupation: {
      type: String,
      required: false,
    },
    businessURL: {
      type: String,
      required: false,
    },
    occupationStatus: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
