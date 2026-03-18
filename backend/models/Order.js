// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     items: [
//       {
//         name: String,
//         price: Number,
//         quantity: Number
//       }
//     ],
//     totalAmount: Number
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Order || mongoose.model("Order", orderSchema);
// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema(
//   {
//     user: { 
//       type: mongoose.Schema.Types.ObjectId, 
//       ref: "User", 
//       required: true 
//     },
//     items: [
//       {
//         name: { type: String, required: true },
//         price: { type: Number, required: true },
//         quantity: { type: Number, required: true }
//       }
//     ],
//     totalAmount: { 
//       type: Number, 
//       required: true,
//       default: 0.0 
//     },
//     // Adding this makes it easier to track payment status later
//     isPaid: {
//       type: Boolean,
//       default: false
//     }
//   },
//   { timestamps: true }
// );

// const Order = mongoose.model("Order", orderSchema);
// export default Order;
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    items: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
      }
    ],
    totalAmount: { 
      type: Number, 
      required: true,
      default: 0.0 
    },
    isPaid: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;