import React from 'react';
import { FaRegLightbulb, FaMicrochip, FaSyncAlt, FaMedal } from "react-icons/fa";

const learnItems = [
    {
        icon: <FaRegLightbulb className="text-blue-400 text-4xl mb-4" />,
        title: "Core AI Concepts",
        description: "Understand the fundamental principles driving modern generative models.",
    },
    {
        icon: <FaMicrochip className="text-blue-400 text-4xl mb-4" />,
        title: "Practical Model Applications",
        description: "Apply cutting-edge generative AI models to real-world problems.",
    },
    {
        icon: <FaSyncAlt className="text-blue-400 text-4xl mb-4" />,
        title: "Continuous Innovation",
        description: "Stay updated with the latest advancements and emerging techniques in AI.",
    },
    {
        icon: <FaMedal className="text-blue-400 text-4xl mb-4" />,
        title: "Certification Readiness",
        description: "Prepare for industry-recognized certifications with comprehensive coverage.",
    },
];

const LearnSection = () => {
    return (
        <section className="px-10 md:px-20 py-16 bg-white text-center">
            <h2 className="text-2xl font-bold mb-12">What You'll Learn</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                {learnItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-md transition max-w-sm mx-auto"
                    >
                        {item.icon}
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm text-center leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearnSection;