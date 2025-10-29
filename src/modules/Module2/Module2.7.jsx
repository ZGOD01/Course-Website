import { module2_7 } from "../../utils/images";

const Module2_7 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.7" className="bg-white p-8 rounded-lg">
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        AI-Powered Marketing: Unlock the Best Prompts
      </h2>

      {/* === Image (Larger & Centered) === */}
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 rounded-lg overflow-hidden">
          <img
            src={module2_7}
            alt={currentModule?.imageAlt || "AI-Powered Marketing"}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Module2_7;
