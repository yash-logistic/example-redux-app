import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "IPhone 10",
      price: 1000000,
      category: "electronics",
      rating: 8.4,
    },
    {
      id: 2,
      name: "samsung mobile",
      price: 20000,
      category: "electronics",
      rating: 7.3,
    },
    {
      id: 3,
      name: "smartwatch",
      price: 1200,
      category: "electronics",
      rating: 7.0,
    },
    {
      id: 4,
      name: "Earbuds",
      price: 1500,
      category: "electronics",
      rating: 9.7,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.products = initialState.products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm)
      );
    },
    addProduct: (state, action) => {
      const { name, price, rating, category } = action.payload;
      const product = {
        id: nanoid(),
        name,
        price,
        rating,
        category,
      };
      state.products = [...state.products, product];
    },
  },
});

export const selectAllProducts = (state) => state.products.products;
export const { searchProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
