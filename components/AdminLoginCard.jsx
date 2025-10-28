import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../src/assets/login-img.png"; // Assuming this path is correct

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // We initialize error as null or empty string to hide it initially
  const [error, setError] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous error messages before validation attempt
    setError(null);

    // Since we are using the 'required' attribute on inputs, we only need to check the credentials here.
    // The browser will block the submission if the fields are empty.
    
    // ✅ Check credentials
    if (email === "test@gmail.com" && password === "test@123") {
      navigate("/dashboard"); // Successful login redirects to Dashboard
    } else {
      // Show error only if credentials do not match the default
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side image */}
      <div className="hidden md:flex w-1/2 h-full">
        <img
          src={loginImg}
          alt="CourseFlow Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side login form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white h-full">
        <div className="w-[90%] max-w-sm p-8 rounded-2xl shadow-sm border border-gray-100">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 bg-[#2563EB] rounded flex items-center justify-center text-white text-sm font-bold">
              🎓
            </div>
            <h1 className="text-[#2563EB] text-2xl font-semibold">CourseFlow</h1>
          </div>

          {/* Welcome text */}
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Welcome Back,
          </h2>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Admin</h2>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // 🔑 Added the required attribute
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 bg-[#2563EB] text-white rounded-md font-medium hover:bg-[#1e4ed8] transition"
            >
              Login
            </button>

            <div className="text-right">
              <a
                href="#"
                className="text-xs text-[#2563EB] hover:underline mt-1 inline-block"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;