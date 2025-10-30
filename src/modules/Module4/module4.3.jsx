// src/modules/Module4/Module4.3.jsx
import React from "react";

const Module4_3 = () => {
  return (
    <div
      id="submodule-content-4.3"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 border-b pb-2 inline-block mb-6">
        Activity 1: Problem Framer: Using the SOLVE Framework
      </h2>

      <div className="space-y-6 text-lg">
        <p>
          You have now learned how to use AI for problem analysis. Let's go ahead
          and apply the <strong>SOLVE Framework</strong> to diagnose a problem in
          a business scenario.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Scenario</h3>
        <p>
          You are part of the Learning & Development (L&D) team at an EdTech
          company. Your company's flagship online learning course is facing a
          40% drop-off rate after the first module. Management has tasked you
          with identifying the root cause before proposing solutions.
        </p>

        <p>
          Your goal is to define the problem clearly by considering:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The current situation - What is happening? (Drop-off rate)</li>
          <li>Potential obstacles and limitations - What challenges might be causing this?</li>
          <li>Vision for improvement - What does success look like?</li>
          <li>Expectations for the AI's output - How can AI assist in diagnosing and addressing the issue?</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700">Goal</h3>
        <p>
          Use <strong>Productivity GPT</strong> to define a clear problem statement for the
          40% learner drop-off rate, to be presented to management.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">Please Follow The Steps Given Below:</h3>

        {/* Step 1 */}
        <h4 className="text-lg font-semibold">Step 1: Access Productivity GPT and Write the First Draft</h4>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>Open <strong>Productivity GPT</strong> (the AI tool).</li>
          <li>
            Identify and define each SOLVE element for the given problem:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>S</strong>: Describe the current situation.</li>
              <li><strong>O</strong>: List possible obstacles affecting learner engagement.</li>
              <li><strong>L</strong>: Mention any constraints, such as time, budget, or resources.</li>
              <li><strong>V</strong>: Outline the desired improvement or success metric.</li>
              <li><strong>E</strong>: Define the AI's expected response format.</li>
            </ul>
          </li>
          <li>
            Apply the SOLVE framework to create your first draft prompt. For example:
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md mt-3 italic">
              <strong>Role:</strong> Act as an experienced educational consultant.<br />
              <strong>Now, use the SOLVE framework to clarify your problem of high drop-off rates in your flagship online course after the first module</strong><br /><br />
              <strong>Situation:</strong> We have a 40% drop-off rate after Module 1.<br />
              <strong>Obstacles:</strong> Potentially low engagement, unclear course structure, or difficulty level.<br />
              <strong>Limitations:</strong> We have limited faculty time and a tight budget.<br />
              <strong>Vision:</strong> Increase course completion by 20% next quarter.<br />
              <strong>Expectations:</strong> Provide a concise 2-paragraph statement summarizing the problem, referencing each SOLVE element.
            </div>
          </li>
          <li>Finalize the prompt and copy-paste it into <strong>Productivity GPT</strong> to generate your first problem-statement draft.</li>
        </ol>

        {/* Step 2 */}
        <h4 className="text-lg font-semibold">Step 2: Review and Refine</h4>
        <p>
          If the statement is too generic or misses important factors, refine it with a follow-up prompt.
          For example:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>To incorporate user feedback:</strong> "Please include feedback that modules may be too lengthy, and emphasize budget constraints."</li>
          <li><strong>To improve clarity:</strong> "Make the problem statement clearer and more specific, ensuring each SOLVE element is addressed."</li>
        </ul>

        {/* Step 3 */}
        <h4 className="text-lg font-semibold">Step 3: Apply the 5 Whys Analysis</h4>
        <p>
          To uncover the root cause of the high drop-off rate, use the <strong>5 Whys</strong> method — an iterative questioning technique that digs deeper into underlying issues.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Start with the main problem: "Why are learners dropping off after Module 1?"</li>
          <li>Answer it, then ask "why" again to probe further. Repeat five times to reach the core issue.</li>
          <li>Present each "why" with a logical answer to trace the root cause.</li>
        </ol>
        <p className="italic text-sm text-gray-600 mt-2">
          Note: This step requires manual analysis; do not use Productivity GPT to generate responses for the 5 Whys.
        </p>

        <p className="mt-4">
          Your problem statement should be ready! You can always refine and iterate further as needed.
          Additionally, provide supporting documents (user feedback, platform analytics, etc.) to improve the AI's outputs.
        </p>
      </div>
    </div>
  );
};

export default Module4_3;
