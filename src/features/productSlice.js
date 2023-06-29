import { createSlice } from "@reduxjs/toolkit";

let { products } = require("../data.json");

const initialState = {
  products,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// export const { getProductData } = productSlice.actions;

// console.log(memeSlice);
// console.log(memeSlice.getInitialState());

export default productSlice.reducer;
