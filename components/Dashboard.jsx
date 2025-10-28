import CourseNavbar from "./CourseNavbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import LearnSection from "./LearnSection";
import CourseModules from "./CourseModules"; 

import heroImg from "../src/assets/course-img.png"; 

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <CourseNavbar />
            <HeroSection heroImg={heroImg} />
            <AboutSection />
            <LearnSection />
            <CourseModules /> 

        </div>
    );
};

export default Dashboard;