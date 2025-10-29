// src/modules/Module1/Module1.4.jsx
import React from "react";
import { submodule4_1, submodule4_2, submodule4_3 } from "../../utils/images";

const Module1_4 = () => {
  return (
    <div id="submodule-content-1.4" className="bg-white p-4 rounded-lg mt-1 pt-2">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
        Navigation Productivity GPT
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        You have already explored two incredible AI tools—<strong className="text-black">ChatGPT and Copilot</strong>.
        <br /><br />
        Now, it's time to dive into your very own custom-built AI: <strong className="text-black">Productivity GPT</strong>. This tool is designed to make learning and research easier. Before moving on to the next video, take a moment to open Productivity GPT, explore its interface, and try out a few prompts yourself.
        <br /><br />
        We encourage you to get your hands dirty and keep using this tool as you go through the next set of videos.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">How to Access:</h3>
      <p className="text-lg text-gray-700 mb-8">
        You must have seen Productivity GPT right as you got started with this segment. Missed it? Just scroll to the top of this page, and you will find this amazing little tool right below the header bar. Simply click on the icon and start exploring its immense possibilities!
      </p>

      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
          <img src={submodule4_1} alt="Productivity GPT Interface Screenshot 1" className="w-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
          <img src={submodule4_2} alt="Productivity GPT Interface Screenshot 2" className="w-full object-cover" />
        </div>
        <p>
          <strong className='mt-4'>Features You Can Use :</strong>
        </p>
        <div className="rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
          <img src={submodule4_3} alt="Productivity GPT Interface Screenshot 3" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Module1_4;
