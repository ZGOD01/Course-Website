import { module2_5 } from "../../utils/images";

const Module2_5 = ({ currentModule }) => {
  return (
    <div id="submodule-content-2.5" className="bg-white p-8 rounded-lg">
      {/* === Submodule Heading === */}
      <h2 className="text-2xl font-bold text-blue-600 pb-2 border-b inline-block mb-6">
        AI for Active Learning: Practice, Apply, and Master
      </h2>

      {/* === Image (Centered & Responsive) === */}
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden">
          <img
            src={module2_5}
            alt={currentModule?.imageAlt || "AI for Active Learning"}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Module2_5;
