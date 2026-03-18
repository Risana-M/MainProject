import User from "../models/User.js";

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); // Don't send passwords to frontend
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// TOGGLE ACTIVE/INACTIVE
export const toggleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isActive = !user.isActive;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};