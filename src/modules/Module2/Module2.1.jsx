import { module2_1 } from "../../utils/images";

const Module2_1 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.1" className="bg-white p-8 rounded-lg">
      {/* Submodule Heading with Blue Underline */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b  inline-block mb-6">
        AI for Research and Content: Save Time and Effort
      </h2>

      {/* Image (No Shadow) */}
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          src={module2_1}
          alt={currentModule?.imageAlt || "AI for Research and Content"}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Module2_1;
