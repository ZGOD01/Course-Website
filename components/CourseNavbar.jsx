import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const CourseNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    console.log("User logged out. Redirecting to login.");
    // Clear tokens/local storage here in a real app
    navigate("/");
  };

  // Helper function to check if route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      {/* 1. Left placeholder (e.g., logo) */}
      <div className="w-1/3">
        {/* Add logo if needed */}
      </div>

      {/* 2. Centered Navigation Links */}
      <div className="flex justify-center space-x-8 w-1/3">
        <Link
          to="/dashboard"
          className={`font-medium transition duration-150 ${
            isActive("/dashboard")
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Course Overview
        </Link>

        <Link
          to="/modules"
          className={`font-medium transition duration-150 ${
            isActive("/modules")
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Modules
        </Link>

        <Link
          to="/about"
          className={`font-medium transition duration-150 ${
            isActive("/about")
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          About
        </Link>
      </div>

      {/* 3. Right side with Logout Button */}
      <div className="flex justify-end w-1/3">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md font-medium text-sm
                     hover:bg-red-600 transition duration-150 ease-in-out"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default CourseNavbar;
