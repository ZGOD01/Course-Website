// src/modules/Module3/Module3.0.jsx
import React from "react";
import { module3_0 } from "../../utils/images";

const Module3_0 = ({ currentModule }) => {
  return (
    <div id="submodule-content-3.0" className="bg-white p-8 rounded-lg ">
      {/* === Dynamic Module Heading === */}
      <h1 className="text-4xl font-extrabold text-black leading-tight font-serif">
        {currentModule?.headline || "Module 3: AI for Data-Driven Decision-Making"}
      </h1>

      {/* === Subheading === */}
      <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mt-4 mb-4">
        AI for Data-Driven Decision-Making: Module Overview
      </h2>

      {/* === Intro Paragraph === */}
      <p className="text-lg text-gray-600 mb-6">
        In this module, you will learn how to transform raw data into clear, actionable insights using AI.
        We will go beyond spreadsheets and show you how to clean, analyze, visualize, and present your
        data to create compelling stories.
      </p>

      {/* === Image Section === */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
        <img
          src={module3_0}
          alt={currentModule?.imageAlt || "AI for Data-Driven Decision-Making Overview"}
          className="w-full object-cover"
        />
      </div>

      {/* === Learning Outcomes === */}
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          What You Will Learn in This Module
        </h3>
        <p>
          <strong>AI-Powered Data Cleaning:</strong> Use ChatGPT and Copilot to fix missing values and
          inconsistencies for reliable analysis.
        </p>
        <p>
          <strong>Exploratory Data Analysis (EDA):</strong> Identify patterns, trends, and anomalies in your data with AI.
        </p>
        <p>
          <strong>Data Storytelling:</strong> Turn insights into engaging narratives using the right visuals.
        </p>
        <p>
          <strong>Effective Reports and Presentations:</strong> Structure reports, design slides, and present data
          persuasively with AI support.
        </p>

        {/* === Achievements === */}
        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">
          What You Will Achieve
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Practical, hands-on experience you can apply immediately.</li>
          <li>Expertise in AI tools like ChatGPT and Copilot for data tasks.</li>
          <li>Real-world applications of AI-driven data analysis.</li>
          <li>Confidence in data storytelling to drive decisions.</li>
          <li>Skills to create clear, impactful presentations.</li>
        </ul>

        {/* === Closing Paragraph === */}
        <p className="mt-6">
          This module enhances your AI skills, helping you become a data storyteller who can make informed,
          data-driven decisions. Get ready to turn data into your most powerful tool!
        </p>
      </div>
    </div>
  );
};

export default Module3_0;
