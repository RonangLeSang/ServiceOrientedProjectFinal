import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove auth token
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <h1 className="text-2xl font-bold">My App</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/dashboard" className="hover:underline">
                principal page
              </a>
            </li>
            <li>
              <a href="/myDashboard" className="hover:underline">
                access my products
              </a>
            </li>
            <li>
              <a href="/sale" className="hover:underline">
                Put an item on sale
              </a>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
