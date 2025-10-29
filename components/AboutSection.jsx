import React from 'react';
import CourseNavbar from './CourseNavbar';

const AboutSection = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* ✅ Navbar stays at the top, full width, not centered */}
            <CourseNavbar />

            {/* ✅ Content centered below */}
            <section className="px-6 md:px-20 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    About the Generative AI Foundation Certificate
                </h2>
                <p className="text-gray-700 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
                    This certificate program offers a comprehensive introduction to the rapidly
                    evolving field of Generative AI. Covering foundational concepts, popular
                    models, and practical applications, learners will gain the skills to develop
                    innovative AI-powered solutions. Perfect for aspiring AI engineers and data scientists.
                </p>
            </section>
        </div>
    );
};

export default AboutSection;
