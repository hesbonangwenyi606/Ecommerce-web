import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      openings: 2,
      skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      duties: [
        "Develop and maintain web interfaces",
        "Collaborate with UI/UX designers",
        "Optimize applications for performance",
      ],
    },
    {
      title: "Backend Developer",
      openings: 1,
      skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
      duties: [
        "Develop server-side logic",
        "Design database schemas",
        "Integrate APIs and third-party services",
      ],
    },
    {
      title: "UI/UX Designer",
      openings: 1,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      duties: [
        "Design user-friendly interfaces",
        "Create wireframes and prototypes",
        "Collaborate with developers for implementation",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      openings: 1,
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
      {/* Top description */}
      <p className="max-w-3xl text-center text-lg text-gray-700 mb-6">
        Thank you for choosing LuxeStore. We are currently having 4 job openings. Click on each job below to see detailed descriptions, required skills, and duties.
      </p>

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
            <div>
              <h2 className="text-2xl font-semibold">{job.title}</h2>
              <p className="text-gray-500 text-sm">{job.openings} position{job.openings > 1 ? "s" : ""} available</p>
            </div>
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
