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
    {
      id: 5,
      name: "Cello plastic bottle",
      price: 200,
      category: "kitchen",
      rating: 8.7,
    },
    {
      id: 6,
      name: "Cello Puro Steel-X Benz 900 ",
      price: 350,
      category: "kitchen",
      rating: 7,
    },
    {
      id: 7,
      name: "tosas plastic lunch box",
      price: 250,
      category: "kitchen",
      rating: 3,
    },
    {
      id: 8,
      name: "cello sportigo bottle",
      price: 200,
      category: "kitchen",
      rating: 3,
    },
    {
      id: 9,
      name: "milton thermosteel bottle",
      price: 1200,
      category: "kitchen",
      rating: 2,
    },
    {
      id: 10,
      name: "carote non-stick cook ware set",
      price: 4200,
      category: "kitchen",
      rating: 2,
    },
    {
      id: 11,
      name: "men tshirt",
      price: 200,
      category: "fashion",
      rating: 1,
    },
    {
      id: 12,
      name: "half sleeve men tshirt",
      price: 200,
      category: "fashion",
      rating: 1,
    },
    {
      id: 13,
      name: "allen solly men polo",
      price: 500,
      category: "fashion",
      rating: 2,
    },
    {
      id: 14,
      name: "kabiran men tshirt",
      price: 300,
      category: "fashion",
      rating: 6,
    },
    {
      id: 15,
      name: "dolphy black dumbbells",
      price: 5500,
      category: "sports",
      rating: 6,
    },
    {
      id: 16,
      name: "adidas cast iron hexagonal dumbbells",
      price: 3000,
      category: "sports",
      rating: 6,
    },

    {
      id: 17,
      name: "hercules fitness air bike",
      price: 17000,
      category: "sports",
      rating: 6,
    },
    {
      id: 18,
      name: "boldwith stumps with stand",
      price: 300,
      category: "sports",
      rating: 6,
    },
    {
      id: 19,
      name: "boldift turf bat",
      price: 350,
      category: "sports",
      rating: 6,
    },
    {
      id: 20,
      name: "poly soft cricket ball",
      price: 200,
      category: "sports",
      rating: 6,
    },
    {
      id: 21,
      name: "dettol antiseptic liquid",
      price: 400,
      category: "household",
      rating: 10,
    },
    {
      id: 22,
      name: "colin surface cleaner",
      price: 600,
      category: "household",
      rating: 8,
    },
    {
      id: 23,
      name: "lyzol floor cleaner",
      price: 200,
      category: "household",
      rating: 5,
    },
    {
      id: 24,
      name: "surf excel matic top load liquid detergent",
      price: 600,
      category: "household",
      rating: 5,
    },
    {
      id: 26,
      name: "comfort morning fresh conditioner",
      price: 500,
      category: "household",
      rating: 5,
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
