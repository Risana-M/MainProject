import express from "express";
const router = express.Router();
import { getUsers, toggleUser } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// This should be "/" because server.js already adds "/api/users"
router.get("/", protect, admin, getUsers); 

// This should be "/:id/toggle"
router.put("/:id/toggle", protect, admin, toggleUser);

export default router;