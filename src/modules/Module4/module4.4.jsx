// src/modules/Module4/Module4.4.jsx
import React from "react";
import module4_4 from "../../assets/module4.4.jpg";

const Module4_4 = () => {
  return (
    <div
      id="submodule-content-4.4"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 border-b pb-2 inline-block mb-6">
        AI for Brainstorming
      </h2>

      {/* === Text Section === */}
      <p className="text-lg mb-8">
        Go beyond traditional brainstorming! Discover how AI can unlock creative
        solutions you never thought of, and then help you choose the most
        effective option.
      </p>

      {/* === Image Section === */}
      <div className="flex justify-center">
        <img
          src={module4_4}
          alt="AI for Brainstorming"
          className="rounded-lg shadow-lg w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default Module4_4;
