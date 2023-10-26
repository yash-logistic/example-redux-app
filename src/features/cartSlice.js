import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.push(product);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    },
  },
});
export const selectCartTotalPrice = (state) => {
  const cart = selectCart(state);
  let totalPrice = 0;
  for (const product of cart) {
    totalPrice += parseFloat(product.price);
  }
  return totalPrice;
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
