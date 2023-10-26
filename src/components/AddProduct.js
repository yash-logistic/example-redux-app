import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const onNameChanged = (e) => setProductName(e.target.value);
  const onPriceChanged = (e) => setProductPrice(e.target.value);
  const onRatingChanged = (e) => setProductRating(e.target.value);
  const onCategoryChanged = (e) => setProductCategory(e.target.value);

  const onSaveProductClicked = (e) => {
    e.preventDefault();
    if (productName && productPrice) {
      dispatch(
        addProduct({
          name: productName,
          price: productPrice,
          rating: productRating,
          category: productCategory,
        })
      );
      setProductName("");
      setProductPrice("");
      setProductRating("");
      setProductCategory("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add a New Product</h2>
      <form onSubmit={onSaveProductClicked}>
        <div className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={onNameChanged}
              className="p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 flex-1"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              value={productPrice}
              onChange={onPriceChanged}
              className="p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="rating"
              value={productRating}
              onChange={onRatingChanged}
              className="p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Product Category"
              value={productCategory}
              onChange={onCategoryChanged}
              className="p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 flex-1"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-500 hover.bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
