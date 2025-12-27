import React from "react";

export const Careers = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      positions: 1,
      lookingFor: "A skilled frontend developer passionate about creating beautiful user interfaces.",
      description: "Build and maintain web applications using React and Tailwind CSS.",
      requirements: [
        "2+ years experience in React",
        "Experience with state management (Redux, Context API)",
        "Familiarity with REST APIs"
      ],
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"],
      applyLink: "mailto:careers@luxestore.com"
    },
    {
      title: "Backend Developer",
      positions: 1,
      lookingFor: "A backend developer focused on creating scalable APIs and database solutions.",
      description: "Design and implement server-side logic and APIs with Node.js and PostgreSQL.",
      requirements: [
        "3+ years experience with Node.js",
        "Experience with relational databases",
        "Understanding of RESTful API design"
      ],
      skills: ["Node.js", "Express", "PostgreSQL", "JWT Authentication"],
      applyLink: "mailto:careers@luxestore.com"
    },
    {
      title: "UI/UX Designer",
      positions: 1,
      lookingFor: "A creative designer to craft intuitive and visually appealing interfaces.",
      description: "Work closely with frontend developers to design responsive web interfaces.",
      requirements: [
        "Portfolio of UI/UX projects",
        "Experience with Figma or Adobe XD",
        "Knowledge of design systems"
      ],
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
      applyLink: "mailto:careers@luxestore.com"
    },
    {
      title: "Marketing Specialist",
      positions: 1,
      lookingFor: "A marketing professional to drive brand awareness and customer engagement.",
      description: "Plan and execute campaigns across social media and digital channels.",
      requirements: [
        "Experience with social media marketing",
        "Knowledge of SEO and analytics tools",
        "Strong communication skills"
      ],
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      applyLink: "mailto:careers@luxestore.com"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4">Careers at LuxeStore</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Thank you for choosing LuxeStore! We are currently having 4 positions open. Below you will find detailed descriptions for each job.
      </p>

      <div className="w-full max-w-4xl space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              {job.title} ({job.positions} Position{job.positions > 1 ? "s" : ""})
            </h2>

            <p className="mb-2"><strong>Who we are looking for:</strong> {job.lookingFor}</p>
            <p className="mb-2"><strong>Job Description:</strong> {job.description}</p>

            <div className="mb-2">
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside ml-4">
                {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
              </ul>
            </div>

            <div className="mb-4">
              <strong>Skills:</strong>
              <ul className="list-disc list-inside ml-4">
                {job.skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </div>

            <div>
              <strong>Where to Apply:</strong>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mt-2"
              >
                📧 Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
