import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../features/productSlice";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
  };

  return (
    <div className="mt-8 mx-auto text-center items-center space-x-2 max-w-md">
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded focus:outline-none"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
