// src/modules/Module3/Module3.5.jsx
import React from "react";
import { module3_5 } from "../../utils/images";

const Module3_5 = () => {
  return (
    <div
      id="submodule-content-3.5"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        From Data to Story: Visual Storytelling
      </h2>

      {/* === Submodule Text === */}
      <p className="text-lg mb-6">
        Numbers do tell a good story, but we can agree that visuals make it
        unforgettable. Let’s see how AI can help translate data into visuals
        that captivate, inform, and inspire action.
      </p>

      {/* === Image Section (Smaller & Centered) === */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
          <img
            src={module3_5}
            alt="From Data to Story: Visual Storytelling"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Module3_5;
