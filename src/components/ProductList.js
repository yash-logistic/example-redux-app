import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { selectAllProducts } from "../features/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="mt-5 max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-300">
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-gray-600">Rating: {product.rating}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-indigo-500 hover-bg-indigo-600 text-white py-2 px-4 rounded focus-outline-none mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatingRange, setSelectedRatingRange] = useState("");

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRatingRangeChange = (range) => {
    setSelectedRatingRange(range);
  };

  const isCategorySelected = (category) =>
    selectedCategories.includes(category);

  const isRatingInRange = (rating) => {
    if (selectedRatingRange === "1-2") {
      return rating >= 1 && rating <= 2;
    } else if (selectedRatingRange === "2-3") {
      return rating >= 2 && rating <= 3;
    } else if (selectedRatingRange === "3-4") {
      return rating >= 3 && rating <= 4;
    } else if (selectedRatingRange === "4-5") {
      return rating >= 4 && rating <= 5;
    } else if (selectedRatingRange === "5-6") {
      return rating >= 5 && rating <= 6;
    } else if (selectedRatingRange === "6-7") {
      return rating >= 6 && rating <= 7;
    } else if (selectedRatingRange === "7-8") {
      return rating >= 7 && rating <= 8;
    } else if (selectedRatingRange === "8-9") {
      return rating >= 8 && rating <= 9;
    } else if (selectedRatingRange === "9-10") {
      return rating >= 9 && rating <= 10;
    }
    return true;
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const isRatingMatch = isRatingInRange(product.rating);
    const isSearchMatch = product.name.toLowerCase().includes(searchTerm);
    return isCategoryMatch && isRatingMatch && isSearchMatch;
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 rounded border border-gray-300 focus-outline-none focus-border-indigo-500 focus-ring focus-ring-indigo-200 w-1/3"
        />
      </div>

      <div className="mb-4 flex items-center justify-center">
        <label>Categories:</label>
        <div className="ml-4 flex space-x-4">
          <label>
            <input
              type="checkbox"
              checked={isCategorySelected("electronics")}
              onChange={() => handleCategoryChange("electronics")}
            />
            electronics
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCategorySelected("jewellery")}
              onChange={() => handleCategoryChange("jewellery")}
            />
            jewellery
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCategorySelected("fashion")}
              onChange={() => handleCategoryChange("fashion")}
            />
            fashion
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCategorySelected("kitchen")}
              onChange={() => handleCategoryChange("kitchen")}
            />
            kitchen
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCategorySelected("sports")}
              onChange={() => handleCategoryChange("sports")}
            />
            sports
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label>Rating Range:</label>
        <select
          value={selectedRatingRange}
          onChange={(e) => handleRatingRangeChange(e.target.value)}
          className="ml-4 p-2 rounded border border-gray-300 focus-outline-none focus-border-indigo-500 focus-ring focus-ring-indigo-200"
        >
          <option value="">All</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
          <option value="4-5">4-5</option>
          <option value="5-6">5-6</option>
          <option value="6-7">6-7</option>
          <option value="7-8">7-8</option>
          <option value="8-9">8-9</option>
          <option value="9-10">9-10</option>
        </select>
      </div>

      <div className="md-grid-cols-2 lg-grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductList;
