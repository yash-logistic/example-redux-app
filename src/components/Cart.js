import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  selectCart,
  selectCartTotalPrice,
} from "../features/cartSlice";

function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectCartTotalPrice);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul className="space-y-4">
        {cart.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between p-2 border rounded shadow-md"
          >
            <span className="text-lg font-medium">
              Product Name : {product.name} <br /> Price : ${product.price}
            </span>
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => handleRemoveFromCart(product.id)}
              className=" bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none text-sm"
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-semibold">
        Total Price: ${totalPrice}
      </div>
    </div>
  );
}

export default Cart;
