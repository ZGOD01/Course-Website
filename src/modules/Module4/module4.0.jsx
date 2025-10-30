import React from "react";
import { module4_0 } from "../../utils/images";

const Module4_0 = ({ currentModule }) => {
  return (
    <div id="submodule-content-4.0" className="bg-white p-8 rounded-lg">
      {/* === Dynamic Module Heading === */}
      <h1 className="text-4xl font-extrabold text-black leading-tight font-serif">
        {currentModule?.headline ||
          "Module 4: AI-Powered Problem-Solving, Brainstorming, and Prototyping"}
      </h1>

      {/* === Subheading === */}
      <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mt-4 mb-4">
        AI-Powered Brainstorming and Prototyping: Module Overview
      </h2>

      {/* === Intro Paragraph === */}
      <p className="text-lg text-gray-600 mb-6">
        Welcome to the final module of this program. Here, you will transform
        problems into solutions using AI. Learn to use AI for problem-solving,
        brainstorming, and rapid prototyping. You will develop skills to tackle
        real-world challenges with speed and creativity.
      </p>

      {/* === Image Section === */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
        <img
          src={module4_0}
          alt={
            currentModule?.imageAlt ||
            "AI-Powered Problem-Solving and Prototyping Overview"
          }
          className="w-full object-cover"
        />
      </div>

      {/* === Learning Outcomes === */}
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          What You Will Learn in This Module
        </h3>
        <p>
          <strong>AI-Driven Problem Framing:</strong> Define problems using the
          5 Whys, problem decomposition, and data gathering. Apply the SOLVE
          framework for actionable problem statements.
        </p>
        <p>
          <strong>AI-Powered Brainstorming:</strong> Generate diverse,
          innovative solutions using few-shot learning, role-playing, and
          scenario planning.
        </p>
        <p>
          <strong>Rapid Prototyping With AI:</strong> Use ChatGPT to create
          wireframes, visual prototypes (PowerPoint), and basic code, iterating
          with AI feedback.
        </p>
        <p>
          <strong>Solution Evaluation and Refinement:</strong> Assess
          feasibility, impact, and risks using AI-driven evaluation matrices and
          pros/cons analysis.
        </p>
        <p>
          <strong>Ethical AI Use:</strong> Ensure responsible AI adoption,
          addressing hallucinations, bias, and human oversight.
        </p>

        {/* === Achievements === */}
        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">
          What You Will Achieve
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Master problem-solving with AI</strong> – Apply structured
            methods like SOLVE and PROMPT.
          </li>
          <li>
            <strong>Unlock creativity</strong> – Generate a wider range of
            innovative solutions.
          </li>
          <li>
            <strong>Build and test rapidly</strong> – Experience
            AI-accelerated prototyping.
          </li>
          <li>
            <strong>Make data-driven decisions</strong> – Evaluate solutions
            with AI-assisted insights.
          </li>
          <li>
            <strong>Become a future-ready innovator</strong> – Use AI as a
            collaborative partner in problem-solving.
          </li>
        </ul>

        {/* === Closing Paragraph === */}
        <p className="mt-6">
          This module builds on Modules 1–3, refining your prompting skills and
          helping you integrate AI into your workflow. Get ready to turn
          challenges into successes!
        </p>
      </div>
    </div>
  );
};

export default Module4_0;
