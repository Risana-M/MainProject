

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  category: {
    type: String
  },

  price: {
    type: Number,
    required: true
  },

  rating: {
    type: Number
  },

  freshness: {
    type: String
  },

  image: {
    type: String
  },

  extraImages: [
    {
      type: String
    }
  ],

  stock: {
    type: Number,
    default: 0
  }

},
{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;