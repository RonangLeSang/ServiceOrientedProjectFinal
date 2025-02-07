import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userEmail = localStorage.getItem("email"); // Get the logged-in user's email

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders", {
          withCredentials: true,
        });

        const allProducts = response.data;
        
        // Filter products to only include those created by the logged-in user
        const userProducts = allProducts.filter(
          (product) => product.email === userEmail
        );

        setProducts(userProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load your products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [userEmail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Mes Produits</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Vous n'avez pas encore ajouté de produits.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
