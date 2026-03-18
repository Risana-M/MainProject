import express from "express";
import { createOrder, getUserOrders, getAllOrders } from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// This handles POST to /api/orders
router.post("/", protect, createOrder); 

// This handles GET to /api/orders/myorders (Fixes your 404)
router.get("/myorders", protect, getUserOrders);

// Admin route
router.get("/all", protect, admin, getAllOrders);

export default router;


// import express from "express";
// import { createOrder, getUserOrders } from "../controllers/orderController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.route("/")
//   .post(protect, createOrder)
//   .get(protect, getUserOrders);

// export default router;