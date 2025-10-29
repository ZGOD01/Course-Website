import React from "react";

const Module2_10 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.10" className="bg-white p-8 rounded-lg">
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        Activity 2: Generating and Editing Blog Content
      </h2>

      {/* === Intro Section === */}
      <p className="text-gray-800 mb-4 leading-relaxed">
        Now that you’ve learned how to generate different types of content using
        AI, let's put your skills to the test with this structured activity.
      </p>

      {/* === Scenario === */}
      <h3 className="text-xl font-semibold text-black mb-2">Scenario</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        You are launching a new <strong>Sustainable Bamboo Travel Cutlery Set</strong> (our
        example from Module 1) and need a blog post that introduces the product
        to an eco-conscious audience. The post should include:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>A compelling introduction</li>
        <li>Key benefits of the product</li>
        <li>A persuasive call to action (CTA)</li>
      </ul>

      {/* === Goal === */}
      <p className="text-gray-800 mb-6 leading-relaxed">
        <strong>Goal:</strong> Use <strong>Productivity GPT</strong> to build a
        blog post that introduces a new product to an eco-conscious target
        audience.
      </p>

      {/* === Step 1 === */}
      <h3 className="text-xl font-semibold text-gray-700 bg-yellow-50 mb-2">
        Step 1: Write the First Draft
      </h3>
      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
        <li>Open Productivity GPT (the AI tool).</li>
        <li>
          Use the <strong>PROMPT framework</strong> to draft your blog prompt:
        </li>
      </ol>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4 text-gray-800">
        <p>
          <strong>Purpose:</strong> Write an engaging blog post introducing our
          _______ (topic/product) to _______ (target audience).
        </p>
        <p>
          <strong>Role:</strong> Act as a blog content writer.
        </p>
        <p>
          <strong>Output format:</strong> Write within _______ (word range),
          including _______ (key components).
        </p>
        <p>
          <strong>Markers:</strong> Highlight eco-friendly materials,
          portability, and sustainability impact.
        </p>
        <p>
          <strong>Tone:</strong> Engaging, educational, and slightly persuasive.
        </p>
      </div>

      <p className="text-gray-700 mb-4">
        Combine all the PROMPT elements to build your final prompt, for example:
      </p>

      <blockquote className="border-l-4 border-blue-400 bg-gray-50 p-4 italic text-gray-800 rounded mb-4">
        “Act as a blog content writer and write an engaging blog post introducing
        our _______ (topic/product) to _______ (target audience). Give the
        output within _______ (word range) and including _______ (key
        components). Highlight eco-friendly materials, portability, and
        sustainability impact, and write in an engaging, educational, and
        slightly persuasive tone.”
      </blockquote>

      <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-1">
        <li>Copy-paste this prompt into Productivity GPT.</li>
        <li>Check out the first draft that the AI generates for you.</li>
      </ol>

      {/* === Step 2 === */}
      <h3 className="text-xl font-semibold text-gray-700 bg-yellow-50 mb-2">
        Step 2: Review and Edit
      </h3>
      <p className="text-gray-700 mb-2">
        Refine the blog further using add-on prompts, for example:
      </p>
      <blockquote className="border-l-4 border-green-400 bg-gray-50 p-4 italic text-gray-800 rounded mb-4">
        “Simplify the blog while keeping key sustainability points and CTA
        intact.”
      </blockquote>
      <p className="text-gray-700 mb-6">
        Ensure better clarity and flow with:
      </p>
      <blockquote className="border-l-4 border-green-400 bg-gray-50 p-4 italic text-gray-800 rounded mb-6">
        “Make the blog more engaging and easy to read.”
      </blockquote>

      {/* === Step 3 === */}
      <h3 className="text-xl font-semibold text-gray-700 bg-yellow-50 mb-2">
        Step 3: Ethical/Plagiarism Check
      </h3>
      <p className="text-gray-700 mb-2">
        Run a check for originality using this prompt:
      </p>
      <blockquote className="border-l-4 border-red-400 bg-gray-50 p-4 italic text-gray-800 rounded mb-6">
        “Review the above blog for originality and potential plagiarism. If
        there are any overused phrases, suggest alternative phrasing.”
      </blockquote>

      {/* === Bonus Challenge === */}
      <h3 className="text-xl font-semibold text-gray-700 bg-yellow-50 mb-2">
        Bonus Challenge
      </h3>
      <p className="text-gray-700 mb-2">
        Optimize the blog for search engines through these prompts:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>
          “Suggest an SEO-friendly title and keywords to improve visibility.”
        </li>
        <li>
          “Keeping SEO best practices in mind, rewrite the blog using shorter
          sentences, bullet points, and subheadings to improve readability and
          engagement.”
        </li>
      </ul>

    </div>
  );
};

export default Module2_10;
