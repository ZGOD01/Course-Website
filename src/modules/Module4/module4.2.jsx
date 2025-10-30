// src/modules/Module4/Module4.2.jsx
import React from "react";
import { module4_2 } from "../../utils/images";

const Module4_2 = () => {
  return (
    <div
      id="submodule-content-4.2"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 border-b pb-2 inline-block mb-6">
        AI for Problem Solving: The SOLVE Framework
      </h2>

      {/* === Description Text === */}
      <p className="text-lg mb-6">
        Having identified and framed your problem to perfection, let’s now tackle it with
        confidence. Learn how AI and the S.O.L.V.E framework drive smarter problem-solving.
      </p>

      {/* === Image Section (Large) === */}
      <div className="flex justify-center">
        <img
          src={module4_2}
          alt="AI for Problem Solving: The SOLVE Framework"
          className="w-full md:w-4/5 rounded-2xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Module4_2;
