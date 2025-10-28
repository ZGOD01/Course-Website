import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

const CourseNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("User logged out. Redirecting to login.");
        // In a real app, you would clear auth tokens/local storage here.
        navigate("/"); 
    };

    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
            {/* 1. Left placeholder for balance (e.g., a logo) */}
            <div className="w-1/3">
                {/* Add a logo or a brand name here if needed */}
            </div>

            {/* 2. Centered Navigation Links */}
            <div className="flex justify-center space-x-8 w-1/3">
                <a href="/dashboard" className="text-blue-600 font-medium hover:text-blue-700">
                    Course Overview
                </a>
                {/* ✅ Changed this to Link for navigation */}
                <Link to="/modules" className="text-gray-600 hover:text-blue-600">
                    Modules
                </Link>
                <a href="/about" className="text-gray-600 hover:text-blue-600">
                    About
                </a>
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
