// src/modules/Module3/Module3.3.jsx
import React from "react";

const Module3_3 = () => {
  return (
    <div
      id="submodule-content-3.3"
      className="bg-white p-8 rounded-lg  text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-semibold text-blue-600 pb-2 border-b inline-block mb-6">
        Activity 1: Data Cleaning Dash
      </h2>

      {/* === Intro Paragraph === */}
      <p className="text-lg mb-6">
        Now that you have learned how to use AI for data cleaning, it's time to
        apply these skills to a real dataset. In this activity, you will use{" "}
        <strong>Productivity GPT</strong> to clean and standardize messy data
        for analysis.
      </p>

      {/* === Scenario Section === */}
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Scenario</h3>
      <p className="mb-6">
        You have a dataset on animal characteristics that requires cleaning. It
        contains duplicates, missing values, and inconsistent text fields. Your
        task is to resolve these issues and prepare the data for meaningful
        insights by focusing on:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Removing Duplicates</li>
        <li>Handling Missing Values</li>
        <li>Cleaning text inconsistencies</li>
        <li>Standardizing data</li>
      </ul>

      {/* === Goal Section === */}
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Goal</h3>
      <p className="mb-6">
        Use <strong>Productivity GPT</strong> to transform the dataset into a
        structured format, ready for analysis and insights.
      </p>

      {/* === Steps Section === */}
      <h3 className="text-xl font-semibold text-blue-700 mb-4">
        Please Follow The Steps Given Below:
      </h3>

      {/* Step 1 */}
      <h4 className="text-lg font-semibold mb-2">Step 1: Upload the Dataset</h4>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>Open <strong>Productivity GPT</strong> (the AI tool).</li>
        <li>
          Upload the dataset on animal characteristics by downloading it from
          here: <span className="text-blue-600 underline cursor-pointer">Link</span>
        </li>
      </ol>
      <p className="mb-6">
        You will find multiple columns within the file, such as height, weight,
        gestation period, conservation period, etc.
      </p>

      {/* Step 2 */}
      <h4 className="text-lg font-semibold mb-2">Step 2: Basic Data Cleaning</h4>
      <p className="mb-4 font-medium">1. Prompt for Quick Cleaning</p>
      <p className="mb-4">
        Use a structured prompt as given below:
      </p>

      <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
        <p className="mb-2"><strong>Role:</strong> Act as a data cleaning assistant.</p>
        <p className="mb-2">
          <strong>Purpose:</strong> Clean and standardize this dataset of animal
          characteristics.
        </p>
        <p className="mb-2"><strong>Markers:</strong> It must:</p>
        <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
          <li>Remove duplicate rows</li>
          <li>Handle missing values in key fields</li>
          <li>Fix inconsistent text formatting</li>
          <li>Standardize country names and numerical ranges</li>
          <li>Summarize the cleaning actions taken</li>
        </ul>
        <p className="mb-2">
          <strong>Output Format:</strong> Step-by-step explanation of the
          cleaning process and a final cleaned dataset.
        </p>
        <p className="mb-2">
          <strong>Tone:</strong> Make it sound clear and instructional.
        </p>
      </div>

      <p className="mb-6">
        2. Copy and paste this prompt into <strong>Productivity GPT</strong> and
        generate the first cleaned dataset.
      </p>
      <p className="mb-6">
        3. You should see a sample preview of the cleaned-up dataset on your
        screen.
      </p>

      {/* Step 3 */}
      <h4 className="text-lg font-semibold mb-2">Step 3: Review and Refine</h4>
      <p className="mb-4">
        1. If the first AI-generated cleanup misses certain issues, refine it
        with follow-up prompts. For example:
      </p>
      <ul className="list-disc list-inside mb-6 ml-4 space-y-2">
        <li>
          <strong>To handle missing values differently:</strong> For missing
          colors, infer based on similar animals. If unknown, mark as
          "Unknown" instead of leaving blank.
        </li>
        <li>
          <strong>To adjust numerical ranges:</strong> Convert all range values
          (e.g., "40-65") to the average of the range.
        </li>
      </ul>

      <p className="mb-4">
        2. Once the dataset is cleaned, you can ask{" "}
        <strong>Productivity GPT</strong> to provide:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>A summary of the cleaning steps taken.</li>
        <li>Any remaining inconsistencies that may need manual intervention.</li>
      </ul>

      <p className="mt-6">
        <strong>Sample Prompt:</strong> Summarize all the data cleaning steps
        performed and highlight any unresolved issues in the dataset.
      </p>
    </div>
  );
};

export default Module3_3;
