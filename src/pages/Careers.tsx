import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      openings: 2,
      lookingFor: "We are looking for a passionate Frontend Developer to build amazing web experiences.",
      description: "Develop, maintain, and optimize our web applications using React and TypeScript.",
      requirements: ["3+ years of frontend development experience", "Strong knowledge of React", "Experience with Tailwind CSS"],
      skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      applyLink: "mailto:careers@luxestore.com?subject=Frontend Developer Application",
    },
    {
      title: "Backend Developer",
      openings: 1,
      lookingFor: "Seeking a skilled Backend Developer to design and implement server-side logic.",
      description: "Develop APIs, manage databases, and ensure high performance and scalability.",
      requirements: ["3+ years experience with Node.js", "Knowledge of PostgreSQL", "Familiarity with REST APIs"],
      skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
      applyLink: "mailto:careers@luxestore.com?subject=Backend Developer Application",
    },
    {
      title: "UI/UX Designer",
      openings: 1,
      lookingFor: "Looking for a creative UI/UX Designer to craft intuitive and beautiful interfaces.",
      description: "Design wireframes, prototypes, and collaborate closely with developers.",
      requirements: ["Proficient in Figma or Adobe XD", "Strong understanding of UX principles"],
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      applyLink: "mailto:careers@luxestore.com?subject=UI/UX Designer Application",
    },
    {
      title: "Digital Marketing Specialist",
      openings: 1,
      lookingFor: "We are seeking a Digital Marketing Specialist to drive online growth and engagement.",
      description: "Plan and execute marketing campaigns, SEO, social media, and analyze performance metrics.",
      requirements: ["Experience in digital marketing", "Strong analytical skills", "Knowledge of SEO tools"],
      skills: ["SEO", "Content Marketing", "Social Media Management", "Google Analytics"],
      applyLink: "mailto:careers@luxestore.com?subject=Digital Marketing Application",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleJob = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (el) {
        if (expandedIndex === index) {
          el.style.maxHeight = el.scrollHeight + "px";
        } else {
          el.style.maxHeight = "0px";
        }
      }
    });
  }, [expandedIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Careers at LuxeStore</h1>

      <p className="max-w-3xl text-center text-lg text-gray-700 mb-6">
        Thank you for choosing LuxeStore. We are currently having 4 job openings. Click on each job below to see detailed descriptions, requirements, skills, and where to apply.
      </p>

      {jobs.map((job, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg w-full max-w-3xl mb-4 overflow-hidden transition-all duration-500">
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

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="px-6 pb-4 transition-max-height duration-500 ease-in-out overflow-hidden max-h-0"
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Who We Are Looking For:</h3>
                <p>{job.lookingFor}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Job Description:</h3>
                <p>{job.description}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Requirements:</h3>
                <ul className="list-disc list-inside">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Skills:</h3>
                <ul className="list-disc list-inside">
                  {job.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Where to Apply:</h3>
                <a
                  href={job.applyLink}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="mr-2">📧</span> Apply Now
                </a>
              </div>
            </div>
          </div>
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
