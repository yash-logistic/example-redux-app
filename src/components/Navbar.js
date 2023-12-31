import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-indigo-500 p-4 flex justify-between items-center text-white">
      <Link
        to="/cart"
        className="ml-auto"
        style={{ display: "flex", alignItems: "center" }}
      >
        <BsCart3 size={20} color="white" />
        <span className="ml-1">Cart</span>
      </Link>

      <Link to="/add-product" className="ml-4">
        Add Product
      </Link>
      <Link to="/list" className="ml-4 mr-16">
        Product List
      </Link>
    </div>
  );
}

export default Navbar;
