// src/modules/Module1/Module1.8.jsx
import React from "react";
import { submodule8 } from "../../utils/images";

const Module1_8 = () => {
  return (
    <div id="submodule-content-1.8" className="bg-white p-4 rounded-lg mt-5 pt-8 min-h-[300px]">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Few-Shot Prompting - Teaching AI with Example
      </h2>
      <div className="rounded-lg overflow-hidden mb-2 max-w-2xl mx-auto ">
        <img src={submodule8} alt="Few-Shot Prompting Concept Diagram" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Module1_8;
