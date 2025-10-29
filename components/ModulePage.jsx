// src/components/ModulePage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseNavbar from "./CourseNavbar";
import useModuleLogic from "../src/modules/useModuleLogic";
import Sidebar from "../components/Sidebar";

// === Module Imports ===
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

import { Module2_0, Module2_1 } from "../src/modules/Module2"; // ✅ New Module 2 import

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

  // === Function to Render Active Module ===
  const renderModuleContent = () => {
    // ✅ MODULE 1
    if (activeModuleId === 1) {
      return (
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl shadow-lg w-full">
          <Module1_0 currentModule={currentModule} />
          <div className="space-y-14">
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

    // ✅ MODULE 2
    if (activeModuleId === 2) {
      return (
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl shadow-lg w-full">
          <Module2_0 currentModule={currentModule} />
          <div className="space-y-14">
            <Module2_1 currentModule={currentModule} />
            {/* Add future submodules here as needed */}
          </div>
        </div>
      );
    }

    // Default Placeholder for future modules
    const activeSubmodule = subModulesData[activeModuleId]?.find(
      (s) => s.id === activeSubmoduleId
    );

    return (
      <div className="p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-lg min-h-[600px] flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
          {activeSubmodule?.title || "Welcome"}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center">
          Content for this specific submodule is coming soon!
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Top Navbar */}
      <CourseNavbar />

      {/* === Page Layout === */}
      <div
        className="flex flex-col md:flex-row w-full mx-auto 
                   px-2 sm:px-3 md:px-6 lg:px-10 xl:px-12 
                   py-6 gap-6 md:gap-10"
      >
        {/* === Sidebar === */}
        <div className="w-full md:w-[24%] pr-4 md:pr-6 lg:pr-8">
          <Sidebar
            courseModules={courseModules}
            activeModuleId={activeModuleId}
            activeSubmoduleId={activeSubmoduleId}
            setActiveModuleId={setActiveModuleId}
            handleSubmoduleClick={handleSubmoduleClick}
            subModulesData={subModulesData}
          />
        </div>

        {/* === Main Content === */}
        <main ref={mainContentRef} className="flex-1 w-full">
          {renderModuleContent()}
        </main>
      </div>
    </div>
  );
};

export default ModulePage;
