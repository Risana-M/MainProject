


import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD PRODUCT
    addToCart: (state, action) => {
      const item = state.items.find(
        (p) => p._id === action.payload._id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // REMOVE PRODUCT
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // INCREASE QTY
    increaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p._id === action.payload
      );

      if (item) item.quantity += 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p._id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
