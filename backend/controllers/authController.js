import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// ✅ REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🔒 validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      isActive: true,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });

  } catch (error) {
    console.error(error); // ✅ log error in Render logs
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔒 validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 🔥 BLOCK INACTIVE USER
    if (!user.isActive) {
      return res.status(403).json({
        message: "Your account is inactive. Contact admin.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });

  } catch (error) {
    console.error(error); // ✅ important for debugging
    res.status(500).json({ message: "Server Error" });
  }
};