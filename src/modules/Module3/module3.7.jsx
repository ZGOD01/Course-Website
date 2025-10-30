// src/modules/Module3/Module3.7.jsx
import React from "react";

const Module3_7 = () => {
  return (
    <div
      id="submodule-content-3.7"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 border-b pb-2 inline-block mb-6">
        Activity 2: Presentation Powerhouse
      </h2>

      {/* === Submodule Content === */}
      <div className="space-y-6 text-lg">
        <p>
          Now that you've learned how to use AI for building presentations, it's
          time to apply these skills by summarizing key insights from an
          abridged version of the <strong>World Health Statistics 2024</strong>.
        </p>

        <h3 className="text-xl font-semibold text-blue-700 mt-6">Scenario</h3>
        <p>
          You are preparing a presentation for policymakers, researchers, and
          public health officials on the findings of the World Health Statistics
          2024. Your presentation should:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Highlight key global health trends</li>
          <li>Provide data-driven recommendations</li>
          <li>Conclude with a strong call to action</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-700 mt-6">Goal</h3>
        <p>
          Create a clear, engaging, and well-structured presentation that
          effectively communicates the key global health trends, statistics, and
          policy recommendations.
        </p>

        <h3 className="text-xl font-semibold text-blue-700 mt-6">
          Please Follow The Steps Given Below:
        </h3>

        {/* === Step 1 === */}
        <h4 className="text-lg font-semibold mt-4">Step 1: Access Productivity GPT</h4>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Go to Productivity GPT on the platform.</li>
          <li>
            Upload the <strong>World Health Statistics report (here)</strong> to
            allow AI to extract relevant details. You can also copy-paste a
            textual summary of the report if you wish to.
          </li>
        </ol>
        <p className="italic text-gray-600">
          Note: This is an abridged version of the full report. You can access
          the complete report here.
        </p>

        {/* === Step 2 === */}
        <h4 className="text-lg font-semibold mt-4">Step 2: Generate a Slide Outline</h4>
        <p>
          Write a structured prompt that clearly defines the role, purpose, and
          output expectations.
        </p>
        <p>Ensure the outline includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Key findings (2 slides)</li>
          <li>Data visuals (charts/tables) (2 slides)</li>
          <li>Recommendations (3 slides)</li>
          <li>Call to action (1 slide)</li>
          <li>Title and closing slides (2 slides)</li>
        </ul>
        <p>
          Maintain a professional yet engaging tone to ensure clarity and
          impact.
        </p>

        <p className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md italic">
          Example: Act as a presentation coach. Create a structured 10-slide
          outline for presenting insights from the World Health Statistics 2024
          report. Ensure it includes key findings, visual data representations,
          recommendations, and a strong call to action. Maintain a professional
          yet engaging tone.
        </p>

        <p>
          Write your own structured prompt to generate the outline and input it
          into Productivity GPT. You will see the outline structure appear on
          the screen slide-by-slide.
        </p>

        {/* === Step 3 === */}
        <h4 className="text-lg font-semibold mt-4">
          Step 3: Draft Slide Content and Speaker Notes
        </h4>
        <p>
          Now that you have a structured outline, refine each slide's content
          and speaker notes to ensure clarity and impact.
        </p>
        <p>
          Use this prompt to generate detailed slide content:
          <br />
          <span className="bg-gray-50 border-l-4 border-blue-500 p-3 block rounded-md mt-2 italic">
            "Generate bullet points for each slide, along with a 1-2 line
            speaker note explaining how to present the data effectively."
          </span>
        </p>
        <p>
          Follow-up prompt example to refine the content:
          <br />
          <span className="bg-gray-50 border-l-4 border-blue-500 p-3 block rounded-md mt-2 italic">
            "Ensure the recommendations are directly based on the key findings.
            Adjust the content if needed to strengthen the connection between
            insights and proposed actions."
          </span>
        </p>

        {/* === Step 4 === */}
        <h4 className="text-lg font-semibold mt-4">Step 4: Add an Icebreaker Slide</h4>
        <p>
          Before presenting the key findings, include an icebreaker slide to
          engage your audience and set the context for discussion. A
          well-designed icebreaker can capture attention and make the topic more
          relatable.
        </p>

        <p>Choose an interactive way to introduce the topic, such as:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>A poll on audience perceptions of global health trends</li>
          <li>
            A surprising statistic about life expectancy shifts after COVID-19
          </li>
          <li>
            A question: "What do you think is the leading cause of death
            globally today?"
          </li>
        </ul>

        <p>
          Prompt to generate an Icebreaker Slide:
          <br />
          <span className="bg-gray-50 border-l-4 border-blue-500 p-3 block rounded-md mt-2 italic">
            "Create an engaging icebreaker slide for a presentation on the World
            Health Statistics 2024 report. The slide should include a
            thought-provoking question, a poll idea, or a surprising statistic
            to encourage audience interaction."
          </span>
        </p>

        <p>
          This slide will help create an interactive and engaging start to your
          presentation.
        </p>

        <p className="mt-4">
          Your presentation should be ready, and you can now transfer it to
          PowerPoint to enhance your slides visually. This process demonstrates
          AI-driven presentation building, improving your ability to communicate
          data insights effectively.
        </p>
      </div>
    </div>
  );
};

export default Module3_7;
