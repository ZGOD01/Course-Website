import React from "react";

const Module4_7 = () => {
  return (
    <div
      id="submodule-content-4.7"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 border-b pb-2 inline-block mb-6">
        Activity 2: Rapid Prototype - Creating a Basic Interactive Mock-Up
      </h2>

      {/* === Introduction === */}
      <p className="text-lg mb-6">
        Let's try building wireframes and prototypes using AI and explore its
        utility in the domain of user and product design.
      </p>

      {/* === Scenario === */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Scenario</h3>
      <p className="mb-4">
        Your task is to redesign the first module of an online course to improve
        engagement and reduce drop-offs. Based on your previous analysis, you
        have identified key issues contributing to the 40% drop-off rate after
        Module 1. Now, your goal is to test improvements by creating a basic
        interactive prototype that:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Provides a clear user flow</li>
        <li>Includes an interactive quiz</li>
        <li>
          Ends with a "Next Module" call-to-action to encourage continuation
        </li>
      </ul>
      <p className="mb-6">
        Your prototype can be built as a clickable PowerPoint demo or a simple
        web-based mock-up.
      </p>

      {/* === Goal === */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal</h3>
      <p className="mb-6">
        Leverage Productivity GPT to prototype and refine your course design,
        ensuring a modern, student-friendly user experience.
      </p>

      {/* === Steps === */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Please Follow The Steps Given Below:
      </h3>

      {/* Step 1 */}
      <h4 className="text-lg font-semibold text-blue-700 mb-2">
        Step 1: Access Productivity GPT
      </h4>
      <p className="mb-6">
        Open Productivity GPT (the AI tool), to assist with your prototype
        creation.
      </p>

      {/* Step 2 */}
      <h4 className="text-lg font-semibold text-blue-700 mb-2">
        Step 2: Generate a Text-Based Wireframe
      </h4>
      <p className="mb-4">
        Start by creating a structured UI flow using the following example
        prompt:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm">
        <p>
          <strong>Prompt Example:</strong> Act as a UX designer. Provide a
          text-based wireframe for a course module page that includes:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>A brief lesson overview (1-2 paragraphs)</li>
          <li>A short, interactive quiz (3-5 multiple-choice questions)</li>
          <li>A progress bar and progress badge for completing the quiz</li>
          <li>
            A "Next Module" call-to-action button. The design should feel
            modern, minimal, and student-friendly.
          </li>
        </ul>
      </div>
      <p className="mb-6">
        Copy and paste this prompt into Productivity GPT to generate the initial
        user flow.
      </p>

      {/* Step 3 */}
      <h4 className="text-lg font-semibold text-blue-700 mb-2">
        Step 3: Create a Visual Prototype (in PowerPoint)
      </h4>
      <p className="mb-4">
        Once the text-based wireframe is ready, you can transform it into a
        clickable PowerPoint prototype through prompting, for example:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm">
        <p>
          <strong>Prompt Example:</strong> Explain how to replicate this
          wireframe in PowerPoint with hyperlinks to simulate button clicks.
          Outline each slide, including the main lesson slide, quiz slide,
          results slide, and a call-to-action slide.
        </p>
      </div>
      <p className="mb-6">
        Copy and paste this prompt into Productivity GPT to generate step-by-step
        instructions. Then open PowerPoint and follow them to build your
        interactive prototype.
      </p>

      {/* Step 4 */}
      <h4 className="text-lg font-semibold text-blue-700 mb-2">
        Step 4 (Optional): Generate Basic Code Snippets for a Web Prototype
      </h4>
      <p className="mb-4">
        If you prefer a web-based prototype, use Productivity GPT to generate a
        simple interactive model.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm">
        <p>
          <strong>Prompt Example:</strong> Generate a JavaScript snippet that
          tallies correct answers from 3 MCQs and displays a completion badge if
          the score is 2 or higher.
        </p>
      </div>
      <p className="mb-6">
        Use this optional step if you want to explore web-based interactivity
        instead of PowerPoint.
      </p>

      {/* Step 5 */}
      <h4 className="text-lg font-semibold text-blue-700 mb-2">
        Step 5: Test and Gather User Feedback
      </h4>
      <p className="mb-4">
        Manually test your prototype by sharing it with colleagues, learners, or
        stakeholders. Observe their interactions and collect feedback on:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Ease of navigation</li>
        <li>Clarity of content and quiz structure</li>
        <li>Effectiveness of the "Next Module" call-to-action</li>
      </ul>
      <p className="mb-6">
        Based on feedback, refine your prototype using Productivity GPT if
        needed.
      </p>

      {/* === Conclusion === */}
      <p className="text-lg font-medium mt-6">
        Your interactive PowerPoint or web-based prototype should now be ready!
        Continue refining it to enhance the learning experience.
      </p>
    </div>
  );
};

export default Module4_7;
