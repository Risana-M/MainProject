import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user._id,
    items: req.body.items,
    totalAmount: req.body.totalAmount,
  });

  res.status(201).json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};