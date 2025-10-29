import { module2_4 } from "../../utils/images";

const Module2_4 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.4" className="bg-white p-8 rounded-lg">
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        Supercharge Your Learning with AI: Simplify Complex Topics
      </h2>

      {/* === Image (Centered) === */}
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden">
          <img
            src={module2_4}
            alt={currentModule?.imageAlt || "Supercharge Your Learning with AI"}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Module2_4;
