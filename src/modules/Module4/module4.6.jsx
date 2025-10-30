// src/modules/Module4/Module4.6.jsx
import React from "react";
import module4_6 from "../../assets/module4.6.jpg";

const Module4_6 = () => {
  return (
    <div
      id="submodule-content-4.6"
      className="bg-white p-8 rounded-lg text-gray-800 leading-relaxed"
    >
      {/* === Submodule Heading === */}
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 border-b pb-2 inline-block mb-6">
        Refining Prototypes with AI: Testing, Feedback & Iteration
      </h2>

      {/* === Text Section === */}
      <p className="text-lg mb-8">
        Having dealt with AI tools at length, we understand the importance of
        iterations and feedback loops. Fail fast, learn faster — is the core
        mantra. Let’s see how AI can bring in iterative thinking in the
        prototyping process.
      </p>

      {/* === Image Section === */}
      <div className="flex justify-center">
        <img
          src={module4_6}
          alt="Refining Prototypes with AI: Testing, Feedback & Iteration"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Module4_6;
