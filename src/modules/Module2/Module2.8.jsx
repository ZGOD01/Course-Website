import { module2_8 } from "../../utils/images";

const Module2_8 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.8" className="bg-white p-8 rounded-lg">
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        Advanced AI Image Creation: Perfecting Prompts
      </h2>

      {/* === Image (Larger & Centered) === */}
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 rounded-lg overflow-hidden">
          <img
            src={module2_8}
            alt={currentModule?.imageAlt || "Advanced AI Image Creation"}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Module2_8;
