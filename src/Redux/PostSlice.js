import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productslice",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter((data) => data.id !== action.payload);
    },
  },
});
export const { addProduct, removeCart } = productSlice.actions;
export default productSlice.reducer;
