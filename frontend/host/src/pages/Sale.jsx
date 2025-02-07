import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sale = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    pictureUrl: "",
    email: "",
  });

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setFormData((prevData) => ({ ...prevData, email: userEmail }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve the token from cookies (browser will send the cookie automatically)
      console.log("Form Data:", formData);

      const response = await axios.post(
        "http://localhost:3000/orders",
        formData,
        {
          withCredentials: true, // Important to send cookies automatically with the request
        }
      );

      console.log("Order created:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full h-24 resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Picture URL</label>
          <input
            type="text"
            name="pictureUrl"
            value={formData.pictureUrl}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="border border-gray-300 p-2 w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default Sale;
