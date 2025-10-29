import CourseNavbar from "./CourseNavbar";
import HeroSection from "./HeroSection";
import LearnSection from "./LearnSection";
import CourseModules from "./CourseModules";
import heroImg from "../src/assets/course-img.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <CourseNavbar />
      <HeroSection heroImg={heroImg} />
      <LearnSection />
      <CourseModules />
    </div>
  );
};

export default Dashboard;
