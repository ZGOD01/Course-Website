import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const CourseNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out. Redirecting to login.");
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        bg-white shadow-md
        sticky top-0 z-50   /* ✅ stays on top */
        backdrop-blur-lg bg-opacity-95
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Placeholder / Logo */}
        <div className="w-1/3 flex items-center">{/* Logo here */}</div>

        {/* Center Links */}
        <div className="hidden md:flex justify-center space-x-8 w-1/3">
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

        {/* Right: Logout */}
        <div className="hidden md:flex justify-end w-1/3">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-red-600 transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end w-1/3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col items-center space-y-3 py-4">
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition duration-150 ${
                isActive("/about")
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              About
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-red-600 transition duration-150 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CourseNavbar;
