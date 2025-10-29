import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseNavbar from "./CourseNavbar";
import useModuleLogic from "../src/modules/useModuleLogic";
import {
  Module1_0,
  Module1_1,
  Module1_2,
  Module1_3,
  Module1_4,
  Module1_5,
  Module1_6,
  Module1_7,
  Module1_8,
  Module1_9,
  Module1_10,
  Module1_11,
} from "../src/modules/Module1";
import Sidebar from "../components/Sidebar";

const ModulePage = () => {
  const location = useLocation();
  const {
    activeModuleId,
    setActiveModuleId,
    activeSubmoduleId,
    handleSubmoduleClick,
    courseModules,
    subModulesData,
    mainContentRef,
    currentModule,
  } = useModuleLogic();

  // ✅ Handle navigation state
  useEffect(() => {
    if (location.state?.activeModuleId) {
      setActiveModuleId(location.state.activeModuleId);
    }
  }, [location.state, setActiveModuleId]);

  const renderModuleContent = () => {
    if (activeModuleId === 1) {
      return (
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <Module1_0 currentModule={currentModule} />
          <div className="space-y-10">
            <Module1_1 />
            <Module1_2 />
            <Module1_3 />
            <Module1_4 />
            <Module1_5 />
            <Module1_6 />
            <Module1_7 />
            <Module1_8 />
            <Module1_9 />
            <Module1_10 />
            <Module1_11 />
          </div>
        </div>
      );
    }

    const activeSubmodule = subModulesData[activeModuleId]?.find(
      (s) => s.id === activeSubmoduleId
    );

    return (
      <div className="p-8 bg-white rounded-lg shadow-xl min-h-[600px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-4">
          {activeSubmodule?.title || "Welcome"}
        </h1>
        <p className="text-xl text-gray-600 text-center">
          Content for this specific submodule is coming soon!
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <CourseNavbar />
      <div className="flex max-w-7xl mx-auto px-6 py-8">
        <Sidebar
          courseModules={courseModules}
          activeModuleId={activeModuleId}
          activeSubmoduleId={activeSubmoduleId}
          setActiveModuleId={setActiveModuleId}
          handleSubmoduleClick={handleSubmoduleClick}
          subModulesData={subModulesData}
        />
        <main ref={mainContentRef} className="flex-1 ml-8">
          {renderModuleContent()}
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
