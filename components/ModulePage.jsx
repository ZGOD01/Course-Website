import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Zap, Brain, Settings, Database, Lightbulb, User } from "lucide-react";
import CourseNavbar from "./CourseNavbar";

// IMAGE IMPORTS (assuming these paths are correct in your local structure)
import module1 from "../src/assets/submodule1.jpg";
import submodule2 from "../src/assets/submodule2.jpg";
import submodule3 from "../src/assets/submodule3.jpg";
import submodule4_1 from "../src/assets/submodule4.1.jpg";
import submodule4_2 from "../src/assets/submodule4.2.jpg";
import submodule4_3 from "../src/assets/submodule4.3.jpg";
import submodule5 from "../src/assets/submodule5.jpg";
import submodule6 from "../src/assets/submodule6.jpg";
import chatgptModuleImg from "../src/assets/chatgaptmodule.jpg";
import submodule7 from "../src/assets/submodule7.jpg"; 
import submodule8 from "../src/assets/submodule8.jpg"; 
import submodule9 from "../src/assets/submodule9.jpg"; 
import submodule10_1 from "../src/assets/submodule10.1.jpg"; 
import submodule10_2 from "../src/assets/submodule10.2.jpg"; 

const ModulePage = () => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const [activeSubmoduleId, setActiveSubmoduleId] = useState('1.0');

    // The ref is still useful for tracking scroll position in the main content area
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
            { id: '1.0', title: "Generative AI: Module Overview" },
            { id: '1.1', title: "Foundations of Generative AI" },
            { id: '1.2', title: "Generative AI: How it Works" },
            { id: '1.3', title: "ChatGPT and Copilot: Your AI Productivity Partners" },
            { id: '1.4', title: "Navigation Productivity GPT" }, 
            { id: '1.5', title: "Crafting Powerful Prompts: PROMPT Framework" },
            { id: '1.6', title: "The PROMPT Framework in Action" }, 
            { id: '1.7', title: "Advanced Programming Technique: Zero-Shot Prompting - Instant Answer" },
            { id: '1.8', title: "Few-Shot Prompting - Teaching AI with Example" },
            { id: '1.9', title: "Chain-of-Thought Prompting - Unlocking Logical Reasoning" },
            { id: '1.10', title: "Activity 1: AI Product Description Challenge" }, 
            { id: '1.11', title: "Activity 2: Social Media Caption Generator" }, // TARGET SUBMODULE
        ],
    };

    const moduleData = {
        1: {
            headline: "Mastering Generative AI and Advanced Prompting",
            description:
                "Dive into the foundational theories and cutting-edge techniques behind modern generative artificial intelligence. Explore various models from VAEs to GANs and Diffusion models, understanding their architectures, training processes, and applications.",
            imageAlt: "Generative AI Concept",
        },
        2: { headline: "AI for Research, Learning, and Content Creation" },
        3: { headline: "Data to Decision: AI-Driven Analytics and Reporting" },
        4: { headline: "AI-Powered Problem-Solving, Brainstorming, and Prototyping" },
        5: { headline: "Understanding AI Agents" },
    };

    const currentModule = moduleData[activeModuleId] || moduleData[1];

    const ListItem = ({ Icon, title, text, colorClass = "text-blue-500" }) => (
        <li className="flex items-start text-gray-700"> 
            <Icon className={`w-5 h-5 ${colorClass} mt-1 mr-3 flex-shrink-0`} />
            <div>
                <strong className="font-semibold">{title}</strong> {text} 
            </div>
        </li>
    );

    // Intersection Observer to update active submodule based on scroll position
    useEffect(() => {
        if (activeModuleId !== 1 || !mainContentRef.current) return;

        const observerOptions = {
            root: null, // Use the viewport as the root (i.e., browser scroll)
            // Adjust this margin if your navbar is a different height. -50% centers the target in the viewport.
            rootMargin: '0px 0px -50% 0px', 
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.id) {
                    const id = entry.target.id.replace('submodule-content-', '');
                    // Only update if the intersecting element is part of the current module's submodules
                    if (subModulesData[activeModuleId]?.find(s => s.id === id)) {
                        setActiveSubmoduleId(id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // We query the sub-module sections from the main content ref
        const targets = mainContentRef.current.querySelectorAll('[id^="submodule-content-"]');
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, [activeModuleId]);


    const handleSubmoduleClick = (submoduleId) => {
        setActiveSubmoduleId(submoduleId);
        // Scroll the selected element into view, aligning it with the top of the viewport
        const element = document.getElementById(`submodule-content-${submoduleId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
    };

    const renderModuleContent = () => {
        // Placeholder for activeSubmodule details, though not used in Module 1 rendering
        const activeSubmodule = subModulesData[activeModuleId]?.find(s => s.id === activeSubmoduleId);

        if (activeModuleId === 1) {
            return (
                <div className="bg-white p-8 rounded-lg shadow-xl">
                    
                    {/* Submodule 1.0: Module Overview */}
                    <div id="submodule-content-1.0">
                        <h1 className="text-4xl font-extrabold text-black leading-tight font-serif">
                            {currentModule.headline}
                        </h1>
                        <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mt-4 mb-4">
                            Generative AI: Module Overview
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Welcome to the exciting world of Generative AI. In this module, we will explain its core ideas,
                            demonstrate how Generative AI works, and introduce you to some powerful tools that reshape creativity,
                            learning, and problem-solving.
                        </p>
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
                            <img src={module1} alt={currentModule.imageAlt} className="w-full object-cover" />
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-blue-600">
                                What You Will Learn in This Module
                            </h3>
                            <ul className="space-y-3">
                                <ListItem Icon={Lightbulb} title="Fundamentals:" text="Understand the concept of Generative AI and learn how it differs from other types of AI." />
                                <ListItem Icon={Brain} title="How It Works:" text='Ever wondered what happens "behind the scenes" when AI creates something new? We will use a straightforward analogy to help you understand.' />
                                <ListItem Icon={Zap} title="Tools:" text="Get practical experience with ChatGPT and Microsoft Copilot, two powerful AI tools you can start using immediately." />
                                <ListItem Icon={Settings} title="Art of the Prompt:" text="Learn the secrets of interacting with AI effectively using the helpful PROMPT framework." />
                                <ListItem Icon={User} title="Advanced Techniques:" text="Improve your prompting skills with Zero-shot, Few-shot, and Chain-of-Thought prompting." />
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-green-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 text-green-600">
                                What You Will Achieve
                            </h3>
                            <ul className="space-y-3">
                                <ListItem Icon={CheckCircle} title="Gain a Strong Foundation" text="in Generative AI Concepts" colorClass="text-green-500" />
                                <ListItem Icon={CheckCircle} title="Understand" text="how AI generates new content" colorClass="text-green-500" />
                                <ListItem Icon={CheckCircle} title="Learn to use AI tools" text="like ChatGPT and Copilot effectively" colorClass="text-green-500" />
                                <ListItem Icon={CheckCircle} title="Develop better AI interactions" text="using structured prompts" colorClass="text-green-500" />
                                <ListItem Icon={CheckCircle} title="Apply advanced prompting techniques" text="to get high-quality AI outputs" colorClass="text-green-500" />
                            </ul>
                        </div>

                        {/* Submodule 1.1: Foundations of Generative AI */}
                        <div id="submodule-content-1.1" className="bg-white p-4 rounded-lg mt-1 pt-2">
                            <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mb-4">
                                Foundations of Generative AI
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                This section now flows naturally, without the forced large empty space.
                            </p>
                            <div className="rounded-lg overflow-hidden mb-2 max-w-lg mx-auto">
                                <img src={submodule2} alt="Foundations of Generative AI" className="w-full object-cover" />
                            </div>
                        </div>

                        {/* Submodule 1.2: Generative AI: How it Works */}
                        <div id="submodule-content-1.2" className="bg-white p-4 rounded-lg mt-1 pt-2">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Generative AI: How it Works
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Dive deep into the core mechanics. We explore the foundational models, such as Transformers,
                                and how they process vast amounts of data to generate coherent and novel outputs, whether it's text,
                                images, or code. This deep-dive explains the magic behind the prompt.
                            </p>
                            <div className="rounded-lg overflow-hidden mb-8 max-w-md mx-auto">
                                <img src={submodule3} alt="Generative AI working mechanism" className="w-full object-cover" />
                            </div>
                        </div>

                        {/* Submodule 1.3: ChatGPT and Copilot: Your AI Productivity Partners */}
                        <div id="submodule-content-1.3" className="bg-white p-4 rounded-lg mt-5 pt-8">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                ChatGPT and Copilot: Your AI Productivity Partners
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                <strong className="text-black">ChatGPT</strong> and <strong className="text-black">Microsoft Copilot</strong> , two powerful AI tools, will be demonstrated in practical scenarious for you to use right away
                            </p>
                            <div className="rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto shadow-lg">
                                <img src={chatgptModuleImg} alt="ChatGPT and Copilot interfaces" className="w-full object-cover" />
                            </div>
                        </div>


                        {/* Submodule 1.4: Navigation Productivity GPT */}
                        <div id="submodule-content-1.4" className="bg-white p-4 rounded-lg mt-1 pt-2">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Navigation Productivity GPT
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                You have already explored two incredible AI tools—<strong className="text-black">ChatGPT and Copilot</strong>.
                                <br /><br />
                                Now, it's time to dive into your very own custom-built AI: <strong className="text-black">Productivity GPT</strong>. This tool is designed to make learning and research easier. Before moving on to the next video, take a moment to open Productivity GPT, explore its interface, and try out a few prompts yourself.
                                <br /><br />
                                We encourage you to get your hands dirty and keep using this tool as you go through the next set of videos.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">How to Access:</h3>
                            <p className="text-lg text-gray-700 mb-8">
                                You must have seen Productivity GPT right as you got started with this segment. Missed it? Just scroll to the top of this page, and you will find this amazing little tool right below the header bar. Simply click on the icon and start exploring its immense possibilities!
                            </p>
                            
                            {/* Images for Submodule 1.4 */}
                            <div className="space-y-6">
                                <div className="rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
                                    <img src={submodule4_1} alt="Productivity GPT Interface Screenshot 1" className="w-full object-cover" />
                                </div>
                                <div className="rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
                                    <img src={submodule4_2} alt="Productivity GPT Interface Screenshot 2" className="w-full object-cover" />
                                </div>
                                <p>
                                    <strong className='mt-4'>Features You Can Use :</strong>
                                </p>
                                <div className="rounded-lg overflow-hidden max-w-xl mx-auto shadow-lg">
                                    <img src={submodule4_3} alt="Productivity GPT Interface Screenshot 3" className="w-full object-cover" />
                                </div>
                            </div>
                        </div>
                        {/* END Submodule 1.4 */}


                        {/* Submodule 1.5: Crafting Powerful Prompts: PROMPT Framework */}
                        <div id="submodule-content-1.5" className="bg-white p-4 rounded-lg mt-5 pt-8">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Crafting Powerful Prompts: PROMPT Framework
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The <strong className="text-black">PROMPT framework</strong> is your key to getting consistently high-quality output from any Generative AI model. It provides a structured approach to thinking about and composing your requests, ensuring you provide all the necessary context for the AI to understand your intent and deliver a precise, relevant response.
                            </p>

                            {/* Image for Submodule 1.5 */}
                            <div className="rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto shadow-lg">
                                <img src={submodule5} alt="PROMPT Framework Diagram" className="w-full object-cover" />
                            </div>

                            <p className="text-lg text-gray-700">
                                Mastering the elements of this framework—<strong className="text-black">P</strong>urpose, <strong className="text-black">R</strong>ole, <strong className="text-black">O</strong>utput Format, <strong className="text-black">M</strong>ethodology, and <strong className="text-black">T</strong>one—will elevate your interactions from simple questions to complex, multi-step tasks.
                            </p>
                        </div>

                        {/* Submodule 1.6: The PROMPT Framework in Action */}
                        <div id="submodule-content-1.6" className="bg-white p-4 rounded-lg mt-5 pt-8 min-h-[500px]">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                The PROMPT Framework in Action
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Seeing the <strong className="text-black">PROMPT Framework</strong> used in real-world scenarios makes the theory click. This section demonstrates how to break down complex tasks and structure them using the five elements of the framework:
                            </p>

                            {/* Image for Submodule 1.6 */}
                            <div className="rounded-lg overflow-hidden mb-8 max-w-xl mx-auto shadow-lg">
                                <img src={submodule6} alt="PROMPT Framework in Action Example" className="w-full object-cover" />
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                                <li><strong className="text-black">Purpose</strong>: Clearly defines the goal (e.g., summarize a report).</li>
                                <li><strong className="text-black">Role</strong>: Instructs the AI on the persona to adopt (e.g., "Act as an experienced market analyst").</li>
                                <li><strong className="text-black">Output Format</strong>: Specifies the desired structure (e.g., "Use bullet points and end with a SWOT analysis").</li>
                                <li><strong className="text-black">Methodology</strong>: Details the steps or data sources to use (e.g., "Analyze only the last quarter's data").</li>
                                <li><strong className="text-black">Tone</strong>: Sets the required style and feeling (e.g., "Maintain a professional and optimistic tone").</li>
                            </ul>
                            <p className="text-lg text-gray-700 mt-6">
                                By applying these steps, you move beyond generic responses and leverage the true power of advanced prompting techniques.
                            </p>
                        </div>

                        {/* Submodule 1.7: Advanced Programming Technique: Zero-Shot Prompting - Instant Answer */}
                        <div id="submodule-content-1.7" className="bg-white p-4 rounded-lg mt-5 pt-8 min-h-[300px]">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Advanced Programming Technique: Zero-Shot Prompting - Instant Answer
                            </h2>
                            <div className="rounded-lg overflow-hidden mb-8 max-w-2xl mx-auto ">
                                <img src={submodule7} alt="Zero-Shot Prompting Concept Diagram" className="w-full object-cover" />
                            </div>
                        </div>
                        
                        {/* Submodule 1.8: Few-Shot Prompting - Teaching AI with Example */}
                        <div id="submodule-content-1.8" className="bg-white p-4 rounded-lg mt-5 pt-8 min-h-[300px]">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Few-Shot Prompting - Teaching AI with Example
                            </h2>
                            <div className="rounded-lg overflow-hidden mb-2 max-w-2xl mx-auto ">
                                <img src={submodule8} alt="Few-Shot Prompting Concept Diagram" className="w-full object-cover" />
                            </div>
                        </div>

                        {/* Submodule 1.9: Chain-of-Thought Prompting - Unlocking Logical Reasoning */}
                        <div id="submodule-content-1.9" className="bg-white p-4 rounded-lg mt-5 pt-2 min-h-[300px]">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Chain-of-Thought Prompting - Unlocking Logical Reasoning
                            </h2>
                            <div className="rounded-lg overflow-hidden mb-4 max-w-2xl mx-auto ">
                                <img src={submodule9} alt="Chain-of-Thought Prompting Concept Diagram" className="w-full object-cover" />
                            </div>
                            <p className="text-lg text-gray-700 mt-4">
                                <strong className="text-black">Advanced Prompting Techniques Cheat Sheet</strong> for a quick guide to Zero-Shot, Few-Shot, and Chain-of-Thought prompting.
                            </p>
                        </div>
                        
                        {/* Submodule 1.10: Activity 1: AI Product Description Challenge */}
                        <div id="submodule-content-1.10" className="bg-white p-4 rounded-lg mt-5 pt-8">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Activity 1: AI Product Description Challenge
                            </h2>

                            <p className="text-lg text-gray-700 mb-6">
                                Now that you have learnt how to craft the perfect prompt using the **PROMPT framework**, here is an activity for you to test your understanding.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Scenario</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                You're launching a new product: a **Sustainable Bamboo Travel Cutlery Set**. You need a compelling product description that highlights:
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                    <li>Eco-friendliness</li>
                                    <li>Portability</li>
                                    <li>Waste reduction</li>
                                </ul>
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">Goal</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Use <strong>Productivity GPT</strong> to write a short, attention-grabbing product description.
                            </p>
                            
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6" role="alert">
                                <p className="font-semibold">Accessing Productivity GPT:</p>
                                <p className="text-sm">You must have seen <strong>Productivity GPT</strong> right as you got started with this segment. Missed it? Just scroll to the top of this page, and you will find this amazing little tool right below the header bar. Simply click on the icon and start exploring its immense possibilities!</p>
                            </div>

                            <div className="space-y-6">
                                <div className="rounded-lg overflow-hidden max-w-3xl mx-auto shadow-lg">
                                    <img src={submodule10_1} alt="Activity Prompt Example 1" className="w-full object-cover" />
                                </div>
                                <div className="rounded-lg overflow-hidden max-w-3xl mx-auto shadow-lg">
                                    <img src={submodule10_2} alt="Activity Prompt Example 2" className="w-full object-cover" />
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-black mb-4 mt-8 border-b pb-2">
                                Please Follow The Steps Below.
                            </h3>

                            {/* Step 1 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 1: First Try - Basic Prompt</h4>
                                <ol className="list-decimal list-inside ml-4 space-y-2 text-lg text-gray-700">
                                    <li>Open <strong className='text-black'>Productivity GPT</strong> (the AI tool).</li>
                                    <li>We'll start with a simple prompt. Fill in the blanks below:
                                        <blockquote className="bg-gray-100 p-3 mt-2 border-l-4 border-gray-400">
                                            "Write a product description for a (your product name) and (two key features)."
                                            <br/>
                                            Focus on its 
                                        </blockquote>
                                    </li>
                                    <li>Copy-paste this prompt into Productivity GPT.</li>
                                    <li>Read the description the AI gives you. This is your first draft!</li>
                                </ol>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 2: Level Up - Use the PROMPT Framework</h4>
                                <p className="text-lg text-gray-700 mb-4">
                                    Now, we'll improve the prompt using the <strong className='text-black'>PROMPT framework</strong>. Fill in the blanks for each part of PROMPT.
                                </p>

                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Purpose</strong> - What's the goal?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Write a product description that
                                            <br/>
                                            (E.g., "makes people want to buy this cutlery set")"
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Role</strong> - What expertise should the AI adopt?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Act as a
                                            <br/>
                                            (E.g., "marketing expert for eco-friendly products")"
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Output</strong> - What format and length?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Write it as a long." about words
                                            <br/>
                                            (E.g., "short paragraph", "50-70")"
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Markers</strong> - Key must-haves & exclusions:
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300 space-y-1">
                                            "It must mention:
                                            <br/>
                                            and
                                            <br/>
                                            (E.g., "bamboo", "easy to carry", "reduces waste")
                                            <br/>
                                            "It should NOT include:
                                            <br/>
                                            (E.g., "technical jargon", "price information")"
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Patterns (Optional)</strong> - Do you want a specific structure?
                                        <p className="mt-1">
                                            Do you want to use a specific structure?
                                        </p>
                                        <p className="mt-1">
                                            If yes, copy and paste this example pattern:
                                            <blockquote className="bg-white p-2 mt-2 border-l-2 border-blue-300">
                                                "Structure: Start by describing a common problem. Then, show how the product solves it. End with a benefit." 
                                            </blockquote>
                                        </p>
                                        <p className="mt-1">
                                            If no, leave this section blank.
                                        </p>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Tone</strong> - What should it sound like?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Make it sound
                                            <br/>
                                            and
                                            <br/>
                                            (E.g., "enthusiastic", "convincing")"
                                        </blockquote>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 3 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 3: Combine and Create Your Super Prompt</h4>
                                <p className="text-lg text-gray-700 mb-4">
                                    <strong className='text-black'>If you choose to use the pattern</strong>, your prompt will look like this:
                                    <blockquote className="bg-green-100 p-3 mt-2 border-l-4 border-green-500 text-sm font-mono">
                                        "Act as a [ROLE]. Write a [OUTPUT] that [PURPOSE], following this structure: [PASTE THE PATTERN HERE]. It must mention [MARKERS] and should NOT include [MARKERS]. Make it sound [TONE]."
                                    </blockquote>
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    <strong className='text-black'>If you did not use the pattern</strong>, your prompt will look like this:
                                    <blockquote className="bg-green-100 p-3 mt-2 border-l-4 border-green-500 text-sm font-mono">
                                        "Act as a [ROLE]. Write a [OUTPUT] that [PURPOSE]. It must mention [MARKERS] and should NOT include [MARKERS]. Make it sound [TONE]."
                                    </blockquote>
                                </p>
                                <p className="text-lg text-gray-700 mt-4">
                                    Copy-paste this <strong className='text-black'>Super Prompt</strong> into Productivity GPT and generate the improved product description.
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-6">
                                    With this, your perfect prompt is ready.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 4: Fine-Tune (If Needed)</h4>
                                <p className="text-lg text-gray-700 mb-4">
                                    Ask yourself:
                                </p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-lg text-gray-700 mb-4">
                                    <li>Is it too long or too short?</li>
                                    <li>Does it follow the structure (if a pattern was used)?</li>
                                    <li>Is the tone correct?</li>
                                    <li>Does it miss anything important?</li>
                                </ul>
                                <p className="text-lg text-gray-700">
                                    If tweaks are needed, add a short follow-up command like below:
                                    <blockquote className="bg-gray-100 p-3 mt-2 border-l-4 border-gray-400 text-sm font-mono space-y-1">
                                        "Make it more concise (50 words)."
                                        <br/>
                                        "Make the call to action stronger."
                                        <br/>
                                        "Change the opening to be more engaging."
                                    </blockquote>
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-6">
                                    With this, your perfect prompt is ready.
                                </p>
                            </div>
                        </div>
                        {/* END Submodule 1.10 */}


                        {/* Submodule 1.11: Activity 2: Social Media Caption Generator */}
                        <div id="submodule-content-1.11" className="bg-white p-4 rounded-lg mt-5 pt-2">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                                Activity 2: Social Media Caption Generator
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Here is another activity for you to test your skills.
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">Scenario</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                You manage the Instagram account for <strong className='text-black'>City Trails</strong>, a service that offers short city-break adventures and showcases unique cultural spots. You need catchy captions that are:
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                    <li>About local experiences (food, history, culture, etc.)</li>
                                    <li>Short and engaging</li>
                                    <li>Casual and enthusiastic</li>
                                    <li>Include 1-2 relevant hashtags</li>
                                </ul>
                            </p>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">Goal</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Use <strong className='text-black'>Productivity GPT</strong> to generate awesome Instagram captions using the "<strong className='text-black'>few-shot prompting</strong>" technique (providing examples to guide the AI).
                            </p>

                            <h3 className="text-xl font-bold text-black mb-4 mt-8 border-b pb-2">
                                Please Follow The Steps Below.
                            </h3>

                            {/* Step 1 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 1: First Try - Give Examples</h4>
                                <ol className="list-decimal list-inside ml-4 space-y-2 text-lg text-gray-700">
                                    <li>Open <strong className='text-black'>Productivity GPT</strong>.</li>
                                    <li>Before asking for new captions, provide the AI with examples of the style you want. This is called "<strong className='text-black'>few-shot prompting</strong>."</li>
                                    <li>Think about the kind of captions you would write for City Trails. They should be:
                                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
                                            <li>Short (around 20 words)</li>
                                            <li>Casual and engaging</li>
                                            <li>Include a hashtag or two</li>
                                        </ul>
                                    </li>
                                    <li>Fill in these blanks with your own examples:
                                        <blockquote className="bg-gray-100 p-3 mt-2 border-l-4 border-gray-400 text-base font-mono space-y-2">
                                            Example 1:
                                            <br/>
                                            \# \#
                                            <br/>
                                            Example 2:
                                            <br/>
                                            \# \#
                                        </blockquote>
                                    </li>
                                </ol>
                            </div>

                            {/* Step 2 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 2: Build Your Prompt - Use the PROMPT Framework</h4>
                                <p className="text-lg text-gray-700 mb-4">
                                    Now, create a detailed prompt that tells the AI exactly what to do. We'll use the <strong className='text-black'>PROMPT framework</strong> to ensure clarity.
                                </p>

                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Purpose</strong> - What are we trying to achieve?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Create (number) Instagram captions about (topic)."
                                            <br/>
                                            (E.g., "Create 3 Instagram captions about exploring hidden alleyways in London.")
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Role</strong> - Who should the AI pretend to be?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Act as a ."
                                            <br/>
                                            (E.g., "social media manager for a travel company.")
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Output</strong> - How long should the captions be?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Each caption should be under hashtags." words and include hashtags."
                                            <br/>
                                            (E.g., "under 25 words and include 1-2 hashtags.")
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Markers</strong> - What must be included or avoided?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300 space-y-1">
                                            "The caption must be relevant to (E.g., City Trails.)
                                            <br/>
                                            "The tone must be (E.g., engaging,casual.) It must NOT: .."
                                            <br/>
                                            "The caption must not be (E.g., include price information.)
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Patterns</strong> - Use your examples as the pattern!
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Here are some example captions. Create new ones that follow the same style: [PASTE YOUR EXAMPLE 1 HERE] [PASTE YOUR EXAMPLE 2 HERE]."
                                        </blockquote>
                                    </li>
                                    <li className="p-3 bg-blue-50 border-l-4 border-blue-500">
                                        <strong className="text-blue-800">Tone</strong> - What should the captions sound like?
                                        <blockquote className="bg-white p-2 mt-1 border-l-2 border-blue-300">
                                            "Make them sound and (E.g., "fun", "inviting.")
                                        </blockquote>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 3 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 3: Combine and Create Your Prompt!</h4>
                                <p className="text-lg text-gray-700 mb-4">
                                    Now, put all your answers from Step 2 into one single prompt.
                                </p>
                                <p className="text-lg text-gray-700 mb-4">
                                    Your final prompt should look like this:
                                    <blockquote className="bg-green-100 p-3 mt-2 border-l-4 border-green-500 text-sm font-mono">
                                        "Act as a [ROLE]. [PURPOSE]. Each caption should be [OUTPUT]. [MARKERS]. Here are some example captions. Create new ones that follow the same style: [PASTE EXAMPLES]. Make them sound [TONE]."
                                    </blockquote>
                                </p>
                                <p className="text-lg text-gray-700 mt-4">
                                    Copy and paste this <strong className='text-black'>Super Prompt</strong> into Productivity GPT.
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-4">
                                    Read the AI-generated captions!
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Step 4: Fine-Tune (If Needed)</h4>
                                <p className="text-lg text-gray-700 mb-4">
                                    Ask yourself:
                                </p>
                                <ul className="list-disc list-inside ml-4 space-y-1 text-lg text-gray-700 mb-4">
                                    <li>Are the captions the right length?</li>
                                    <li>Do they have the right tone?</li>
                                    <li>Do they fit the City Trails brand?</li>
                                    <li>Do they include hashtags?</li>
                                </ul>
                                <p className="text-lg text-gray-700">
                                    If you need to refine them, add a short follow-up command:
                                    <blockquote className="bg-gray-100 p-3 mt-2 border-l-4 border-gray-400 text-sm font-mono space-y-1">
                                        "Make them shorter."
                                        <br/>
                                        "Add an emoji to each one."
                                        <br/>
                                        "Make them sound more adventurous."
                                    </blockquote>
                                </p>
                                <p className="text-lg font-bold text-gray-800 mt-6">
                                    Now you're ready to craft killer Instagram captions!
                                </p>
                            </div>
                        </div>
                        {/* END Submodule 1.11 */}

                    </div>
                </div>
            );
        }

        // Default placeholder for other modules
        return (
            <div className="p-8 bg-white rounded-lg shadow-xl min-h-[600px] flex flex-col justify-center items-center">
                <h1 className="text-3xl font-extrabold text-blue-800 mb-4">
                    {activeSubmodule?.title || "Welcome"}
                </h1>
                <p className="text-xl text-gray-600 text-center">
                    Content for this specific submodule is coming soon! <br />
                    Currently displaying: <strong>{activeSubmoduleId}</strong>
                </p>
            </div>
        );
    };

    return (
        <div className="bg-gray-50 text-gray-800"> 
            <CourseNavbar />
            
            <div className="flex max-w-7xl mx-auto px-6 py-8"> 
                {/* Sidebar - CORRECTED STYLES APPLIED HERE */}
                <aside className="w-1/4 bg-white rounded-lg shadow p-5 sticky top-8 self-start **max-h-[calc(100vh-4rem)] overflow-y-auto**">
                    <h2 className="font-semibold text-gray-700 mb-4">MODULE LIST</h2>
                    <div className="space-y-4 text-sm"> 
                        {courseModules.map((module) => (
                            <div key={module.id}>
                                <p
                                    className={`font-medium cursor-pointer transition hover:text-blue-600 ${module.id === activeModuleId ? "text-blue-600" : "text-gray-800"
                                            } ${module.id !== 1 ? 'mt-4' : ''} flex justify-between items-center`}
                                    onClick={() => setActiveModuleId(module.id)}
                                >
                                    {module.title}
                                </p>
                                {activeModuleId === module.id && subModulesData[module.id] && (
                                    <div className="space-y-2 mt-2 border-l border-blue-200 pl-4">
                                        {subModulesData[module.id].map((submodule) => (
                                            <p
                                                key={submodule.id}
                                                className={`text-sm cursor-pointer hover:text-blue-500 transition p-1 rounded -ml-1 ${submodule.id === activeSubmoduleId
                                                        ? 'font-semibold text-blue-700 bg-blue-50'
                                                        : 'text-gray-600'
                                                        }`}
                                                onClick={() => handleSubmoduleClick(submodule.id)}
                                            >
                                                {submodule.title}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main content - Relies on browser scroll */}
                <main 
                    ref={mainContentRef} 
                    className="flex-1 ml-8" 
                >
                    {renderModuleContent()}
                </main>
            </div>
        </div>
    );
};

export default ModulePage;