import React from 'react';

// You will need to pass the heroImg as a prop from the parent Dashboard
const HeroSection = ({ heroImg }) => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-blue-50">
            <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Generative AI Foundation Certificate
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Master the essentials of Generative AI and build real-world
                    applications.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Start Learning
                </button>
                <div className="flex items-center mt-6">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Instructor"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="text-gray-800">Instructor Jane Doe, Ph.D.</span>
                </div>
            </div>

            <div className="mt-10 md:mt-0 md:ml-10">
                <img
                    src={heroImg}
                    alt="AI Visualization"
                    className="rounded-xl w-[400px] md:w-[500px] shadow-md"
                />
            </div>
        </section>
    );
};

export default HeroSection;