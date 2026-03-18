
import Order from "../models/Order.js";

// CREATE NEW ORDER
export const createOrder = async (req, res) => {
  try {
    // 1. Check if items actually exist
    if (!req.body.items || req.body.items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = await Order.create({
      user: req.user._id,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      shippingAddress: req.body.shippingAddress, // Ensure this matches your Model
      paymentMethod: req.body.paymentMethod || "COD",
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("Order Creation Error:", error);
    res.status(500).json({ message: "Failed to create order", error: error.message });
  }
};

// GET LOGGED-IN USER ORDERS
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your orders", error: error.message });
  }
};

// GET ALL ORDERS (FOR ADMIN)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all orders", error: error.message });
  }
};









// import Order from "../models/Order.js";


// export const createOrder = async (req, res) => {
//   const order = await Order.create({
//     user: req.user._id,
//     items: req.body.items,
//     totalAmount: req.body.totalAmount,
//   });

//   res.status(201).json(order);
// };

// export const getUserOrders = async (req, res) => {
//   const orders = await Order.find({ user: req.user._id });
//   res.json(orders);
// };


// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("user", "name email")
//       .sort({ createdAt: -1 });

//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };






// export const createOrder = async (req, res) => {
//   const order = await Order.create({
//     user: req.user._id,
//     items: req.body.items,
//     totalAmount: req.body.totalAmount,
//   });

//   res.status(201).json(order);
// };

// export const getUserOrders = async (req, res) => {
//   const orders = await Order.find({ user: req.user._id });
//   res.json(orders);
// };