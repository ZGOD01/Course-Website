// src/modules/Module3/Module3.2.jsx
import { module3_2 } from "../../utils/images";

const Module3_2 = ({ currentModule }) => {
  return (
    <div id="submodule-content-3.2" className="bg-white p-8 rounded-lg">
      {/* Submodule Heading with Blue Underline */}
      <h2 className="text-2xl font-semibold text-blue-600 pb-2 border-b inline-block mb-6">
        Data Detective: Using AI for Exploratory Data Analysis
      </h2>

      {/* Intro Text */}
      <p className="text-lg text-gray-700 mb-6">
        Raw data is just noise. Learn how to become a <strong>"data detective"</strong>, 
        using AI to uncover hidden patterns, spot anomalies, and find the real story your data is telling.
      </p>

      {/* Image (No Shadow) */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={module3_2}
          alt={
            currentModule?.imageAlt ||
            "Data Detective: Using AI for Exploratory Data Analysis"
          }
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Module3_2;
