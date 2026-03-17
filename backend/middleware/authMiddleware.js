import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token using secret key and decode user information
    req.user = await User.findById(decoded.id).select("-password");    // Fetch logged-in user from database (exclude password field)

    next();    // Continue to next middleware or controller

  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
};

