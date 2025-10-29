// src/modules/Module1/Module1.6.jsx
import React from "react";
import { submodule6 } from "../../utils/images";

const Module1_6 = () => {
  return (
    <div id="submodule-content-1.6" className="bg-white p-4 rounded-lg mt-5 pt-8 min-h-[500px]">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        The PROMPT Framework in Action
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Seeing the <strong className="text-black">PROMPT Framework</strong> used in real-world scenarios makes the theory click. This section demonstrates how to break down complex tasks and structure them using the five elements of the framework:
      </p>
      <div className="rounded-lg overflow-hidden mb-8 max-w-xl mx-auto shadow-lg">
        <img src={submodule6} alt="PROMPT Framework in Action Example" className="w-full object-cover" />
      </div>

      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
        <li><strong className="text-black">Purpose</strong>: Clearly defines the goal (e.g., summarize a report).</li>
        <li><strong className="text-black">Role</strong>: Instructs the AI on the persona to adopt (e.g., "Act as an experienced market analyst").</li>
        <li><strong className="text-black">Output Format</strong>: Specifies the desired structure (e.g., "Use bullet points and end with a SWOT analysis").</li>
        <li><strong className="text-black">Methodology</strong>: Details the steps or data sources to use (e.g., "Analyze only the last quarter's data").</li>
        <li><strong className="text-black">Tone</strong>: Sets the required style and feeling (e.g., "Maintain a professional and optimistic tone").</li>
      </ul>

      <p className="text-lg text-gray-700 mt-6">
        By applying these steps, you move beyond generic responses and leverage the true power of advanced prompting techniques.
      </p>
    </div>
  );
};

export default Module1_6;
