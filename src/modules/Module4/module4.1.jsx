// src/modules/Module4/Module4.1.jsx
import React from "react";
import { module4_1 } from "../../utils/images";

const Module4_1 = () => {
  return (
    <div
      id="submodule-content-4.1"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 border-b pb-2 inline-block mb-6">
        AI for Problem Framing
      </h2>

      {/* === Description Text === */}
      <p className="text-lg mb-6">
        Before solving a problem, we need to frame it right. Let’s see how AI can refine
        our perspective for smarter decision-making by helping us frame our problems better.
      </p>

      {/* === Image Section (Large) === */}
      <div className="flex justify-center">
        <img
          src={module4_1}
          alt="AI for Problem Framing"
          className="w-full md:w-4/5 rounded-2xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Module4_1;
