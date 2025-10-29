// src/modules/Module1/Module1.5.jsx
import React from "react";
import { submodule5 } from "../../utils/images";

const Module1_5 = () => {
  return (
    <div id="submodule-content-1.5" className="bg-white p-4 rounded-lg mt-5 pt-8">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Crafting Powerful Prompts: PROMPT Framework
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        The <strong className="text-black">PROMPT framework</strong> is your key to getting consistently high-quality output from any Generative AI model. It provides a structured approach to thinking about and composing your requests, ensuring you provide all the necessary context for the AI to understand your intent and deliver a precise, relevant response.
      </p>

      <div className="rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto shadow-lg">
        <img src={submodule5} alt="PROMPT Framework Diagram" className="w-full object-cover" />
      </div>

      <p className="text-lg text-gray-700">
        Mastering the elements of this framework—<strong className="text-black">P</strong>urpose, <strong className="text-black">R</strong>ole, <strong className="text-black">O</strong>utput Format, <strong className="text-black">M</strong>ethodology, and <strong className="text-black">T</strong>one—will elevate your interactions from simple questions to complex, multi-step tasks.
      </p>
    </div>
  );
};

export default Module1_5;
