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

import {
  Module2_0,
  Module2_1,
  Module2_10,
  Module2_2,
  Module2_3,
  Module2_5,
  Module2_6,
  Module2_7,
  Module2_8,
  Module2_9,
} from "../src/modules/Module2";

import Module2_4 from "../src/modules/Module2/Module2.4";

import {
  Module3_0,
  Module3_1,
  Module3_2,
  Module3_3,
  Module3_4,
  Module3_5,
  Module3_6,
  Module3_7,
} from "../src/modules/Module3";

import {
  Module4_0,
  Module4_1,
  Module4_3,
  Module4_4,
  Module4_5,
  Module4_6,
  Module4_7,
} from "../src/modules/Module4";
import Module4_2 from "../src/modules/Module4/module4.2";
import { Module5_0 } from "../src/modules/Module5";

// ✅ NEW IMPORT

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
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
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
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
          <Module2_0 currentModule={currentModule} />
          <div className="space-y-10">
            <Module2_1 />
            <Module2_2 />
            <Module2_3 />
            <Module2_4 />
            <Module2_5 />
            <Module2_6 />
            <Module2_7 />
            <Module2_8 />
            <Module2_9 />
            <Module2_10 />
          </div>
        </div>
      );
    }

    // ✅ MODULE 3
    if (activeModuleId === 3) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
          <Module3_0 currentModule={currentModule} />
          <Module3_1 />
          <Module3_2 />
          <Module3_3 />
          <Module3_4 />
          <Module3_5 />
          <Module3_6 />
          <Module3_7 />
        </div>
      );
    }

    // ✅ MODULE 4
    if (activeModuleId === 4) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
          <Module4_0 currentModule={currentModule} />
          <Module4_1 />
          <Module4_2 />
          <Module4_3 />
          <Module4_4 />
          <Module4_5 />
          <Module4_6 />
          <Module4_7 />
        </div>
      );
    }

    // ✅ MODULE 5
    if (activeModuleId === 5) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
          <Module5_0 currentModule={currentModule} />
        </div>
      );
    }

    // Default Placeholder
    const activeSubmodule = subModulesData[activeModuleId]?.find(
      (s) => s.id === activeSubmoduleId
    );

    return (
      <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center w-full min-h-[600px]">
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
      <div className="flex flex-col md:flex-row w-full mx-auto px-4 py-6 gap-6">
        {/* === Sidebar === */}
        <div className="w-full md:w-[24%] pr-6">
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
