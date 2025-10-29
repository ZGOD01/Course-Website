import React from "react";

const Sidebar = ({
  courseModules,
  activeModuleId,
  activeSubmoduleId,
  setActiveModuleId,
  handleSubmoduleClick,
  subModulesData,
}) => {
  return (
    <aside className="w-1/4 bg-white rounded-lg shadow p-5 sticky top-8 self-start overflow-visible">
      <h2 className="font-semibold text-gray-700 mb-4">MODULE LIST</h2>
      <div className="space-y-4 text-sm">
        {courseModules.map((module) => (
          <div key={module.id}>
            <p
              className={`font-medium cursor-pointer transition hover:text-blue-600 ${
                module.id === activeModuleId
                  ? "text-blue-600"
                  : "text-gray-800"
              } ${module.id !== 1 ? "mt-4" : ""}`}
              onClick={() => setActiveModuleId(module.id)}
            >
              {module.title}
            </p>

            {activeModuleId === module.id && subModulesData[module.id] && (
              <div className="space-y-2 mt-2 border-l border-blue-200 pl-4">
                {subModulesData[module.id].map((submodule) => (
                  <p
                    key={submodule.id}
                    className={`text-sm cursor-pointer hover:text-blue-500 transition p-1 rounded -ml-1 ${
                      submodule.id === activeSubmoduleId
                        ? "font-semibold text-blue-700 bg-blue-50"
                        : "text-gray-600"
                    }`}
                    onClick={() => handleSubmoduleClick(submodule.id)}
                  >
                    {submodule.title}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
