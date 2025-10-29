import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaFlask,
  FaChartLine,
  FaLightbulb,
  FaRobot,
} from "react-icons/fa";

const CourseModules = () => {
  const navigate = useNavigate();

  const courseModules = [
    {
      id: 1,
      title: "Mastering Generative AI and Advanced Prompting",
      progress: 20,
      status: "20% Complete",
      icon: <FaBrain className="text-purple-500 text-2xl" />,
    },
    {
      id: 2,
      title: "AI for Research, Learning, and Content Creation",
      progress: 0,
      status: "Not Started",
      icon: <FaFlask className="text-pink-500 text-2xl" />,
    },
    {
      id: 3,
      title: "Data to Decision: AI-Driven Analytics and Reporting",
      progress: 0,
      status: "Not Started",
      icon: <FaChartLine className="text-green-500 text-2xl" />,
    },
    {
      id: 4,
      title: "AI-Powered Problem-Solving, Brainstorming, and Prototyping",
      progress: 0,
      status: "Not Started",
      icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
    },
    {
      id: 5,
      title: "Understanding AI Agents",
      progress: 0,
      status: "Not Started",
      icon: <FaRobot className="text-indigo-500 text-2xl" />,
    },
  ];

  const handleViewDetails = (moduleId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/modules", { state: { activeModuleId: moduleId } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-12 px-3 sm:px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Course <span className="text-blue-600">Modules</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {courseModules.map((module) => (
            <motion.div
              key={module.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl shadow-md p-5 border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:border-blue-300 transition"
              style={{ overflow: "hidden" }}
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 bg-white/70 rounded-lg shadow-sm">
                    {module.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 leading-snug">
                    {module.title}
                  </h3>
                </div>

                {module.progress > 0 ? (
                  <>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1 overflow-hidden">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs font-medium text-blue-600 mb-3">
                      {module.status}
                    </p>
                  </>
                ) : (
                  <p className="text-xs font-medium text-gray-400 mb-4">
                    Not Started
                  </p>
                )}
              </div>

              <button
                onClick={() => handleViewDetails(module.id)}
                className="w-full py-2 rounded-md text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseModules;
