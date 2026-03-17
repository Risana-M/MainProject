import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        name: String,
        price: Number,
        quantity: Number
      }
    ],
    totalAmount: Number
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);