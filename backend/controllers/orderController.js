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


export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






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