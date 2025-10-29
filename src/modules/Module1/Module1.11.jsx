// src/modules/Module1/Module1.11.jsx
import React from "react";

const Module1_11 = () => {
  return (
    <div id="submodule-content-1.11" className="bg-white p-4 rounded-lg mt-5 pt-2">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Activity 2: Social Media Caption Generator
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Here is another activity for you to test your skills.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Scenario</h3>
      <p className="text-lg text-gray-700 mb-6">
        You manage the Instagram account for <strong className='text-black'>City Trails</strong>, a service that offers short city-break adventures and showcases unique cultural spots. You need catchy captions that are:
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>About local experiences (food, history, culture, etc.)</li>
          <li>Short and engaging</li>
          <li>Casual and enthusiastic</li>
          <li>Include 1-2 relevant hashtags</li>
        </ul>
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-4">Goal</h3>
      <p className="text-lg text-gray-700 mb-6">
        Use <strong className='text-black'>Productivity GPT</strong> to generate awesome Instagram captions using the "<strong className='text-black'>few-shot prompting</strong>" technique (providing examples to guide the AI).
      </p>

      {/* Steps 1..4 content — paste the exact markup from your original ModulePage if you want exact verbatim */}
    </div>
  );
};

export default Module1_11;
