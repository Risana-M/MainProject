//This slices manage specific parts of  global data

import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlistSlice";
import cartReducer from "../features/cartSlice";
import searchReducer from "../features/searchSlice";
import filterReducer from "../features/filterSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    search: searchReducer,
       filters: filterReducer,
       auth: authReducer,
  }
});