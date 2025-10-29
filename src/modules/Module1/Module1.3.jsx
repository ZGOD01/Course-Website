// src/modules/Module1/Module1.3.jsx
import React from "react";
import { chatgptModuleImg } from "../../utils/images";

const Module1_3 = () => {
  return (
    <div id="submodule-content-1.3" className="bg-white p-4 rounded-lg mt-5 pt-8">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        ChatGPT and Copilot: Your AI Productivity Partners
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        <strong className="text-black">ChatGPT</strong> and <strong className="text-black">Microsoft Copilot</strong>, two powerful AI tools, will be demonstrated in practical scenarious for you to use right away
      </p>
      <div className="rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto shadow-lg">
        <img src={chatgptModuleImg} alt="ChatGPT and Copilot interfaces" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Module1_3;
