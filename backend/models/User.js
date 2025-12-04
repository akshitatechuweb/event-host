import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      trim: true,
    },

    email: { type: String, index: true, unique: true, sparse: true },
    phone: { type: String, index: true, unique: true, sparse: true },

    role: {
      type: String,
      enum: ["guest", "host", "moderator", "admin", "superadmin"],
      default: "guest",
    },

    bio: {
      type: String,
      maxlength: 500,
      default: "",
    },

    city: {
      type: String,
      require: true,
    },

    profileDetails: {
      age: { type: Number, min: 0 },
      gender: { type: String, enum: ["Male", "Female", "Other"] },
    },

    photos: [
      {
        url: { type: String },
        isProfilePhoto: { type: Boolean, default: false },
      },
    ],

    contactInfo: {
      socialLinks: {
        linkedin: String,
        instagram: String,
        twitter: String,
        website: String,
      },
    },

    profileCompletion: {
      type: Number,
      default: 0,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isHostVerified: { type: Boolean, default: false },

    isHostRequestPending: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
