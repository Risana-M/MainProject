// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization?.startsWith("Bearer")) {
//     token = req.headers.authorization.split(" ")[1];

//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token using secret key and decode user information
//     req.user = await User.findById(decoded.id).select("-password");    // Fetch logged-in user from database (exclude password field)

//     next();    // Continue to next middleware or controller

//   } else {
//     res.status(401);
//     throw new Error("Not authorized");
//   }
// };

// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// // This protects routes for logged-in users
// export const protect = async (req, res, next) => {
//   let token = req.headers.authorization;

//   if (token && token.startsWith("Bearer")) {
//     try {
//       token = token.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// // ADD THIS PART - This is what was missing!
// export const admin = (req, res, next) => {
//   if (req.user && req.user.role === "admin") {
//     next();
//   } else {
//     res.status(403).json({ message: "Not authorized as an admin" });
//   }
// };
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Look for the user
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "Not authorized, user not found" });
      }

      req.user = user; // Set the user
      return next(); // Move to controller
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};