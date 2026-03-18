// // backend/models/User.js
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, default: "user" },
//     // ADD THIS LINE:
//     isActive: { type: Boolean, default: true }, 
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;

import User from "../models/User.js";

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};