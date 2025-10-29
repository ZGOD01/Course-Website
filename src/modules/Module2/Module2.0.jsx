import ListItem from "../ListItem";
import { module2 } from "../../utils/images";

const Module2_0 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.0" className="bg-white p-8 rounded-lg">
      <h1 className="text-4xl font-extrabold text-black leading-tight font-serif">
        {currentModule.headline}
      </h1>
      <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mt-4 mb-4">
        AI for Productivity: Module Overview
      </h2>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-600 mb-6">
        Welcome to the next part of your AI journey! In this module, you will learn how AI can help with
        research, learning, and creating content and pictures. You will learn how to use AI to find
        information faster, understand better, and be more creative.
      </p>

      {/* Image */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
        <img src={module2} alt={currentModule.imageAlt} className="w-full object-cover" />
      </div>

      {/* Plain text content */}
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          What You Will Learn in This Module
        </h3>
        <p>
          <strong>AI for Research and Content:</strong> Use AI to find facts, summarize texts, and generate
          content quickly.
        </p>
        <p>
          <strong>Summarizing With AI:</strong> Apply the 80/20 rule and PROMPT method to get clear, concise
          summaries.
        </p>
        <p>
          <strong>Learning Faster With AI:</strong> Simplify complex topics using techniques like ELI5,
          role-playing, and the Feynman Technique.
        </p>
        <p>
          <strong>Creating Content With AI:</strong> Overcome writer’s block and craft engaging emails, blogs,
          and marketing text.
        </p>
        <p>
          <strong>Creating Pictures With AI:</strong> Generate images from text using ChatGPT and Copilot,
          learning advanced prompt techniques.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">
          What You Will Achieve
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Find information faster with AI-powered research.</li>
          <li>Learn complex topics more easily using structured techniques.</li>
          <li>Boost creativity in writing and content creation.</li>
          <li>Work more efficiently by automating tasks.</li>
          <li>Generate stunning images with AI-driven tools.</li>
          <li>Use AI responsibly, ensuring ethical and effective application.</li>
        </ul>

        <p className="mt-6">
          This module builds on what you learned in <strong>Module 1</strong>. You will hone your prompting
          skills and find new ways to use AI. Get ready to be more productive and creative!
        </p>
      </div>
    </div>
  );
};

export default Module2_0;
