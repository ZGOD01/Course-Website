import { useState, useEffect, useRef } from "react";

export default function useModuleLogic() {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [activeSubmoduleId, setActiveSubmoduleId] = useState("1.0");
  const mainContentRef = useRef(null);

  const courseModules = [
    { id: 1, title: "Module 1: Mastering Generative AI and Advanced Prompting" },
    { id: 2, title: "Module 2: AI for Research, Learning, and Content Creation" },
    { id: 3, title: "Module 3: Data to Decision: AI-Driven Analytics and Reporting" },
    { id: 4, title: "Module 4: AI-Powered Problem-Solving, Brainstorming, and Prototyping" },
    { id: 5, title: "Module 5: Understanding AI Agents" },
  ];

  const subModulesData = {
    1: [
      { id: "1.0", title: "Generative AI: Module Overview" },
      { id: "1.1", title: "Foundations of Generative AI" },
      { id: "1.2", title: "Generative AI: How it Works" },
      { id: "1.3", title: "ChatGPT and Copilot: Your AI Productivity Partners" },
      { id: "1.4", title: "Navigation Productivity GPT" },
      { id: "1.5", title: "Crafting Powerful Prompts: PROMPT Framework" },
      { id: "1.6", title: "The PROMPT Framework in Action" },
      { id: "1.7", title: "Zero-Shot Prompting - Instant Answer" },
      { id: "1.8", title: "Few-Shot Prompting - Teaching AI with Example" },
      { id: "1.9", title: "Chain-of-Thought Prompting - Unlocking Logical Reasoning" },
      { id: "1.10", title: "Activity 1: AI Product Description Challenge" },
      { id: "1.11", title: "Activity 2: Social Media Caption Generator" },
    ],
  };

  const moduleData = {
    1: {
      headline: "Mastering Generative AI and Advanced Prompting",
      description:
        "Dive into the foundational theories and cutting-edge techniques behind modern generative artificial intelligence.",
      imageAlt: "Generative AI Concept",
    },
    2: { headline: "AI for Research, Learning, and Content Creation" },
    3: { headline: "Data to Decision: AI-Driven Analytics and Reporting" },
    4: { headline: "AI-Powered Problem-Solving, Brainstorming, and Prototyping" },
    5: { headline: "Understanding AI Agents" },
  };

  const currentModule = moduleData[activeModuleId] || moduleData[1];

  // Intersection Observer
  useEffect(() => {
    if (activeModuleId !== 1 || !mainContentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            const id = entry.target.id.replace("submodule-content-", "");
            if (subModulesData[activeModuleId]?.find((s) => s.id === id)) {
              setActiveSubmoduleId(id);
            }
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px" }
    );

    const targets = mainContentRef.current.querySelectorAll("[id^='submodule-content-']");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [activeModuleId]);

  const handleSubmoduleClick = (submoduleId) => {
    setActiveSubmoduleId(submoduleId);
    const element = document.getElementById(`submodule-content-${submoduleId}`);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return {
    activeModuleId,
    setActiveModuleId,
    activeSubmoduleId,
    setActiveSubmoduleId,
    handleSubmoduleClick,
    courseModules,
    subModulesData,
    moduleData,
    currentModule,
    mainContentRef,
  };
}
