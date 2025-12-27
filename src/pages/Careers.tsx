import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      duties: [
        "Develop and maintain web interfaces",
        "Collaborate with UI/UX designers",
        "Optimize applications for performance",
      ],
    },
    {
      title: "Backend Developer",
      skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
      duties: [
        "Develop server-side logic",
        "Design database schemas",
        "Integrate APIs and third-party services",
      ],
    },
    {
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      duties: [
        "Design user-friendly interfaces",
        "Create wireframes and prototypes",
        "Collaborate with developers for implementation",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      skills: ["SEO", "Content Marketing", "Social Media Management", "Google Analytics"],
      duties: [
        "Plan and execute marketing campaigns",
        "Optimize website content for SEO",
        "Analyze marketing data and metrics",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Careers at LuxeStore</h1>

      {jobs.map((job, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg w-full max-w-3xl mb-4"
        >
          {/* Job Title */}
          <button
            onClick={() => toggleJob(index)}
            className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <span className="text-xl">{expandedIndex === index ? "−" : "+"}</span>
          </button>

          {/* Collapsible content */}
          {expandedIndex === index && (
            <div className="px-6 pb-4">
              {/* Skills/Requirements */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Skills / Requirements:</h3>
                <ul className="list-disc list-inside">
                  {job.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Duties */}
              <div>
                <h3 className="font-semibold mb-2">Duties:</h3>
                <ul className="list-disc list-inside">
                  {job.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}

      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mt-6"
      >
        Back to Home
      </Link>
    </div>
  );
};
