// src/modules/Module3/Module3.4.jsx
import React from "react";
import { module3_4 } from "../../utils/images";

const Module3_4 = () => {
  return (
    <div
      id="submodule-content-3.4"
      className="bg-white p-8 rounded-lg  text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        From Data to Story: Tailoring Your Narrative
      </h2>

      {/* === Submodule Text === */}
      <p className="text-lg mb-6 text-gray-600">
        As any data expert will tell you, numbers alone don’t inspire. Let’s see
        how you can use AI to transform raw data and develop powerful narratives
        out of it.
      </p>

      {/* === Image Section === */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img
          src={module3_4}
          alt="From Data to Story: Tailoring Your Narrative"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Module3_4;
