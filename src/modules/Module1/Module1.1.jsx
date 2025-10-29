// src/modules/Module1/Module1.1.jsx
import React from "react";
import { submodule2 } from "../../utils/images";

const Module1_1 = () => {
  return (
    <div id="submodule-content-1.1" className="bg-white p-4 rounded-lg mt-1 pt-2">
      <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mb-4">
        Foundations of Generative AI
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        This section now flows naturally, without the forced large empty space.
      </p>
      <div className="rounded-lg overflow-hidden mb-2 max-w-lg mx-auto">
        <img src={submodule2} alt="Foundations of Generative AI" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Module1_1;
