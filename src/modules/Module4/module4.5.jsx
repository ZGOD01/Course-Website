// src/modules/Module4/Module4.5.jsx
import React from "react";
import module4_5 from "../../assets/module4.5.jpg";

const Module4_5 = () => {
  return (
    <div
      id="submodule-content-4.5"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 border-b pb-2 inline-block mb-6">
        AI for Prototyping: From Idea to Wireframe
      </h2>

      {/* === Text Section === */}
      <p className="text-lg mb-8">
        Test and tweak to unlock the power of AI-accelerated prototyping.
        Discover how AI can enhance prototyping for smarter product development.
      </p>

      {/* === Image Section === */}
      <div className="flex justify-center">
        <img
          src={module4_5}
          alt="AI for Prototyping: From Idea to Wireframe"
          className="rounded-lg shadow-lg w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default Module4_5;
