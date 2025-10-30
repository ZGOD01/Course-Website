// src/modules/Module3/Module3.1.jsx
import { module3_1 } from "../../utils/images";

const Module3_1 = ({ currentModule }) => {
  return (
    <div id="submodule-content-3.1" className="bg-white p-8 rounded-lg">
      {/* Submodule Heading with Blue Underline */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        From Data to Decisions: Data Cleaning and Analysis With AI
      </h2>

      {/* Image (No Shadow) */}
      <div className="bg-white rounded-lg overflow-hidden">
        <img
          src={module3_1}
          alt={currentModule?.imageAlt || "From Data to Decisions: Data Cleaning and Analysis With AI"}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Module3_1;
