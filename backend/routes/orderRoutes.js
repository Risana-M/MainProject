import express from "express";
import { createOrder, getUserOrders, getAllOrders } from "../controllers/orderController.js";

const router = express.Router();

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Order route working ✅");
});

router.post("/", createOrder);
router.get("/", getUserOrders);
router.get("/all", getAllOrders);

export default router;



// import express from "express";
// import { createOrder, getUserOrders } from "../controllers/orderController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.route("/")
//   .post(protect, createOrder)
//   .get(protect, getUserOrders);

// export default router;