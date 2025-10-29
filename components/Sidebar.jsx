import React, { useState } from "react";

const Sidebar = ({
  courseModules,
  activeModuleId,
  activeSubmoduleId,
  setActiveModuleId,
  handleSubmoduleClick,
  subModulesData,
}) => {
  const [hoveredSubmoduleId, setHoveredSubmoduleId] = useState(null);

  return (
    <aside
      className="
        w-full md:w-80
        md:sticky md:top-16 self-start
        px-2 md:px-0
        transition-all duration-300 z-20
        md:mr-8
      "
    >
      {/* === Sidebar Card === */}
      <div className="hidden md:block bg-white rounded-2xl shadow-lg p-5">
        <h2 className="font-semibold text-gray-800 mb-5 tracking-tight">
          MODULE LIST
        </h2>

        {/* === Desktop Vertical Sidebar === */}
        <div className="flex flex-col gap-3 text-sm">
          {courseModules.map((module) => (
            <div key={module.id} className="w-full">
              <button
                onClick={() => setActiveModuleId(module.id)}
                className={`w-full text-left font-medium cursor-pointer px-3 py-2 rounded-md transition-all duration-150 flex items-center justify-between
                  ${
                    module.id === activeModuleId
                      ? "text-blue-700 bg-blue-50 border-l-4 border-blue-500 shadow-sm"
                      : "text-gray-800 hover:bg-gray-50 hover:text-blue-600"
                  }`}
              >
                <span className="truncate">{module.title}</span>
              </button>

              {activeModuleId === module.id && subModulesData[module.id] && (
                <div className="mt-2 pl-4 border-l border-blue-100 space-y-1">
                  {subModulesData[module.id].map((submodule) => {
                    const isActive = submodule.id === activeSubmoduleId;
                    const isHovered = submodule.id === hoveredSubmoduleId;

                    return (
                      <div
                        key={submodule.id}
                        onClick={() => handleSubmoduleClick(submodule.id)}
                        onMouseEnter={() => setHoveredSubmoduleId(submodule.id)}
                        onMouseLeave={() => setHoveredSubmoduleId(null)}
                        className={`cursor-pointer px-2 py-1 rounded-md transition-all duration-150 transform
                          ${
                            isActive || isHovered
                              ? "font-semibold text-blue-700 bg-blue-100"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:translate-x-1"
                          }`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleSubmoduleClick(submodule.id);
                          }
                        }}
                      >
                        <span className="truncate block">
                          {submodule.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* === Mobile Horizontal Modules (unchanged) === */}
      <div className="md:hidden flex items-center gap-6 overflow-x-auto px-2 py-3 -mx-2 scrollbar-hide border-b border-gray-200 bg-white rounded-xl shadow-md">
        {courseModules.slice(0, 5).map((module, index) => (
          <p
            key={module.id}
            onClick={() => setActiveModuleId(module.id)}
            className={`shrink-0 cursor-pointer text-base font-medium transition-all duration-200
              ${
                module.id === activeModuleId
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-500"
              }`}
          >
            Module {index + 1}
          </p>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
