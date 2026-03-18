import express from "express";
import { getUsers, toggleUser } from "../controllers/userController.js";
// Ensure this line is exactly like this:
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, admin, getUsers);
router.put("/:id/toggle", protect, admin, toggleUser);

export default router;