

const Module5_0 = ({ currentModule }) => {
  return (
    <div id="submodule-content-5.0" className="bg-white p-8 rounded-lg">
      {/* === Dynamic Module Heading === */}
      <h1 className="text-4xl font-extrabold text-black leading-tight font-serif">
        {currentModule?.headline || "Module 5: Understanding AI Agents"}
      </h1>

      {/* === Subheading === */}
      <h2 className="text-2xl font-semibold text-blue-600 border-b pb-2 mt-4 mb-4">
        Understanding AI Agents: Module Overview
      </h2>

      {/* === Intro Paragraph === */}
      <p className="text-lg text-gray-600 mb-6">
        Use this optional step if you want to explore web-based interactivity
        instead of PowerPoint.
      </p>

      {/* === Main Section === */}
      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Step 5: Test and Gather User Feedback
        </h3>

        <p>
          Manually test your prototype by sharing it with colleagues, learners,
          or stakeholders. Observe their interactions and collect feedback on:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Ease of navigation</li>
          <li>Clarity of content and quiz structure</li>
          <li>Effectiveness of the 'Next Module' call-to-action</li>
        </ul>

        <p>
          Based on the feedback, refine your prototype by making necessary
          improvements. If needed, you can use <strong>Productivity GPT</strong>{" "}
          to adjust specific elements.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
          <p className="italic text-gray-700">
            Example prompt:{" "}
            <span className="font-medium">
              “Based on user feedback [copy paste the feedback if required],
              adjust the quiz difficulty and improve the 'Next Module'
              call-to-action to enhance engagement.”
            </span>
          </p>
        </div>

        <p>
          Your interactive PowerPoint or web-based prototype should now be
          ready! You can continue refining it as needed to enhance the learning
          experience.
        </p>
      </div>

    </div>
  );
};

export default Module5_0;
