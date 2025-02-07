import React from "react";

const ProductCard = ({ product, onDelete, onPlaceOrder, showPlaceOrder }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <img className="w-full h-48 object-cover" src={product.pictureUrl} alt={product.name} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
        </div>

        {/* Show delete button only when onDelete is passed */}
        {onDelete && (
          <button
            onClick={() => onDelete(product._id)}
            className="mt-3 bg-red-600 text-white px-4 py-2 w-full rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        )}

        {/* Show "Place Order" button only if showPlaceOrder is true */}
        {showPlaceOrder && (
          <button
            onClick={() => onPlaceOrder(product)}
            className="mt-3 bg-green-600 text-white px-4 py-2 w-full rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
