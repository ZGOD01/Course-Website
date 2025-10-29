// src/modules/Module1/Module1.7.jsx
import React from "react";
import { submodule7 } from "../../utils/images";

const Module1_7 = () => {
  return (
    <div id="submodule-content-1.7" className="bg-white p-4 rounded-lg mt-5 pt-8 min-h-[300px]">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Advanced Programming Technique: Zero-Shot Prompting - Instant Answer
      </h2>
      <div className="rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto ">
        <img src={submodule7} alt="Zero-Shot Prompting Concept Diagram" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Module1_7;
