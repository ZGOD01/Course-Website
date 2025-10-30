// src/modules/Module3/Module3.6.jsx
import React from "react";
import { module3_6 } from "../../utils/images";

const Module3_6 = () => {
  return (
    <div
      id="submodule-content-3.6"
      className="bg-white p-8 rounded-lg mt-6"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 border-b pb-2 inline-block mb-6">
        Presenting Your Data Story: From Report to Impact
      </h2>

      {/* === Image Section (Smaller & Centered) === */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
          <img
            src={module3_6}
            alt="Presenting Your Data Story: From Report to Impact"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Module3_6;
