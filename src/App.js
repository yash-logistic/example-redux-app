import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/list" element={<ProductList />} />
          </Routes>
        </div>
      </Router>
    </Provider> 
  );
}

export default App;
