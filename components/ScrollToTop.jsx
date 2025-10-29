// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to top smoothly whenever route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // this component doesn't render anything
};

export default ScrollToTop;
