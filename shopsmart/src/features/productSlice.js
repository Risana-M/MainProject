import { createSlice } from "@reduxjs/toolkit";
import product from "../data/Product";

const productSlice = createSlice({
    name: "product",
    initialState: product,
    reducers: {},
});

export default productSlice.reducer;