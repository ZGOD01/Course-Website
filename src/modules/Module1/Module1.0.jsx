// src/modules/Module1/Module1.0.jsx
import ListItem from "../ListItem";
import { Lightbulb, Brain, Zap, Settings, User, CheckCircle } from "lucide-react";
import { module1 } from "../../utils/images";

const Module1_0 = ({ currentModule }) => {
  return (
    <div id="submodule-content-1.0" className="bg-white p-8 rounded-lg ">
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
      </div>
    </div>
  );
};

export default Module1_0;
