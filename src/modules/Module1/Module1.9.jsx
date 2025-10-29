// src/modules/Module1/Module1.9.jsx
import React from "react";
import { submodule9 } from "../../utils/images";

const Module1_9 = () => {
  return (
    <div id="submodule-content-1.9" className="bg-white p-4 rounded-lg mt-5 pt-2 min-h-[300px]">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Chain-of-Thought Prompting - Unlocking Logical Reasoning
      </h2>
      <div className="rounded-lg overflow-hidden mb-4 max-w-2xl mx-auto ">
        <img src={submodule9} alt="Chain-of-Thought Prompting Concept Diagram" className="w-full object-cover" />
      </div>
      <p className="text-lg text-gray-700 mt-4">
        <strong className="text-black">Advanced Prompting Techniques Cheat Sheet</strong> for a quick guide to Zero-Shot, Few-Shot, and Chain-of-Thought prompting.
      </p>
    </div>
  );
};

export default Module1_9;
