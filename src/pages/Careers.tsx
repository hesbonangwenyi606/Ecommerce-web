import React from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      lookingFor: "Creative developer experienced with React, TypeScript, and TailwindCSS.",
      requirements: [
        "2+ years of frontend experience",
        "Strong knowledge of React and modern JavaScript",
        "Experience with responsive design",
      ],
      duties: [
        "Develop and maintain web interfaces",
        "Collaborate with UI/UX designers",
        "Optimize applications for performance",
      ],
    },
    {
      title: "Backend Developer",
      lookingFor: "Skilled in Node.js, Express, and database design.",
      requirements: [
        "3+ years of backend development experience",
        "Experience with PostgreSQL or MongoDB",
        "Familiarity with REST APIs and authentication",
      ],
      duties: [
        "Build and maintain API endpoints",
        "Ensure data security and scalability",
        "Collaborate with frontend developers",
      ],
    },
    {
      title: "Marketing Specialist",
      lookingFor: "Creative marketer experienced with digital campaigns and social media.",
      requirements: [
        "2+ years of marketing experience",
        "Strong written and verbal communication skills",
        "Experience with SEO and social media tools",
      ],
      duties: [
        "Develop and execute marketing campaigns",
        "Manage social media accounts",
        "Analyze marketing data and reports",
      ],
    },
    {
      title: "Customer Support Representative",
      lookingFor: "Friendly and proactive individual with excellent communication skills.",
      requirements: [
        "1+ years of customer service experience",
        "Ability to handle inquiries professionally",
        "Good problem-solving skills",
      ],
      duties: [
        "Respond to customer inquiries via email and chat",
        "Resolve issues quickly and efficiently",
        "Maintain customer satisfaction",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Careers at LuxeStore</h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
        Join the LuxeStore team! We’re always looking for talented individuals passionate about luxury products and excellent customer experiences.
      </p>

      <div className="w-full max-w-4xl space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="font-medium mb-2"><strong>What we’re looking for:</strong> {job.lookingFor}</p>
            
            <div className="mb-2">
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Duties:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                {job.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};
