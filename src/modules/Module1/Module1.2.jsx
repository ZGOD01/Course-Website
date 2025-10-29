// src/modules/Module1/Module1.2.jsx
import React from "react";
import { submodule3 } from "../../utils/images";

const Module1_2 = () => {
  return (
    <div id="submodule-content-1.2" className="bg-white p-4 rounded-lg mt-1 pt-2">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Generative AI: How it Works
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Dive deep into the core mechanics. We explore the foundational models, such as Transformers,
        and how they process vast amounts of data to generate coherent and novel outputs, whether it's text,
        images, or code. This deep-dive explains the magic behind the prompt.
      </p>
      <div className="rounded-lg overflow-hidden mb-8 max-w-md mx-auto">
        <img src={submodule3} alt="Generative AI working mechanism" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Module1_2;
