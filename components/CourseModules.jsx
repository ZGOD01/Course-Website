import React from 'react';

// Data structure for the course modules
const courseModules = [
  {
    title: 'Welcome to Your Journey',
    status: '20% Complete',
    progress: 20, 
  },
  {
    title: 'Mastering Generative AI and Advanced Prompting',
    status: 'Not Started',
    progress: 0,
  },
  {
    title: 'AI for Research, Learning, and Content Creation',
    status: 'Not Started',
    progress: 0,
  },
  {
    title: 'Data to Decision : AI-Driven Analytics and Reporting',
    status: 'Not Started',
    progress: 0,
  },
  {
    title: 'AI-Powered Problem-Solving, Brainstorming, and Prototyping',
    status: 'Not Started',
    progress: 0,
  },
  {
    title: 'Understanding AI Agents',
    status: 'Not Started',
    progress: 0,
  },
];

// Helper Component for the individual module card
const ModuleCard = ({ module }) => {
  const isStarted = module.progress > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between h-full">
      {/* Title and Status/Progress Area */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">{module.title}</h3>

        {/* Status and Progress Bar */}
        {isStarted ? (
          <>
            {/* Progress Bar Container */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
              {/* Progress Bar Fill */}
              <div 
                className="bg-blue-600 h-1.5 rounded-full" 
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
            {/* Status Text */}
            <p className="text-sm font-medium text-blue-600 mb-4">{module.status}</p>
          </>
        ) : (
          /* 'Not Started' Status (Uses a fixed height to align content vertically across cards) */
          <p className="text-sm font-medium text-gray-500 mb-4 h-[30px] flex items-center">{module.status}</p>
        )}
      </div>
      
      {/* View Details Button with hover effect */}
      <button className="w-full py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out 
                         bg-white border-2 border-gray-200 text-gray-600 
                         hover:bg-blue-400 hover:text-white hover:border-transparent">
        View Details
      </button>
    </div>
  );
};

// Main Course Modules Component
const CourseModules = () => {
  return (
    // Outer container for background and centering
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Course Modules
        </h1>

        {/* Modules Grid (Responsive 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseModules.map((module, index) => (
            <ModuleCard key={index} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseModules;