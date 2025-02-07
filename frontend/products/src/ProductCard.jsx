import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <img className="w-full h-48 object-cover" src={product.pictureUrl} alt={product.name} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;