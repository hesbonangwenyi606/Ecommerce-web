import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Job {
  title: string;
  positions: number;
  who: string;
  description: string;
  requirements: string[];
  applyEmail: string;
}

const jobs: Job[] = [
  {
    title: "Frontend Developer",
    positions: 1,
    who: "A highly motivated frontend developer passionate about building fast, responsive, and accessible web applications.",
    description: "Develop and maintain interactive, responsive, and user-friendly web applications. Collaborate with designers and backend developers. Optimize applications for speed and scalability.",
    requirements: [
      "2+ years experience with React, Next.js, or similar frameworks",
      "Experience with state management tools like Redux or Context API",
      "Strong understanding of HTML5, CSS3, JavaScript, and TypeScript",
      "Familiarity with REST APIs and GraphQL",
      "Knowledge of responsive design and cross-browser compatibility",
      "Experience with Git and version control",
      "Understanding of accessibility (WCAG) and SEO best practices",
      "Bachelor’s degree in Computer Science, Software Engineering, or a related field",
      "Skills: React, TypeScript, Tailwind CSS, HTML/CSS, JavaScript, UI/UX awareness"
    ],
    applyEmail: "hesbonmanyinsa96@gmail.com"
  },
  {
    title: "Backend Developer",
    positions: 1,
    who: "A results-driven backend developer with experience building scalable APIs and handling database architectures for e-commerce platforms.",
    description: "Design and implement robust backend solutions using Node.js and Express. Build and maintain RESTful APIs. Ensure application security, data protection, and system reliability.",
    requirements: [
      "3+ years experience with Node.js, Express, and database systems (PostgreSQL, MySQL)",
      "Experience designing RESTful APIs and understanding of authentication/authorization",
      "Strong knowledge of SQL and database schema design",
      "Familiarity with cloud services (AWS, Azure, or GCP)",
      "Understanding of caching, queues, and microservices architecture",
      "Strong debugging, problem-solving, and optimization skills",
      "Experience with CI/CD pipelines and automated testing frameworks",
      "Bachelor’s degree in Computer Science, Information Systems, or related field",
      "Skills: Node.js, Express, PostgreSQL/MySQL, API design, JWT Authentication, Cloud services, CI/CD"
    ],
    applyEmail: "hesbonmanyinsa96@gmail.com"
  },
  {
    title: "UI/UX Designer",
    positions: 1,
    who: "A creative and detail-oriented designer to craft seamless, intuitive, and visually appealing experiences for our users.",
    description: "Design user interfaces for web and mobile applications. Create wireframes, mockups, and interactive prototypes. Conduct user research and usability testing. Collaborate with developers.",
    requirements: [
      "Portfolio demonstrating expertise in UI/UX design",
      "Proficiency with Figma, Sketch, or Adobe XD",
      "Knowledge of responsive design principles and accessibility standards",
      "Experience conducting user research and usability testing",
      "Strong understanding of design systems and component libraries",
      "Ability to work in an agile development environment",
      "Excellent communication and collaboration skills",
      "Bachelor’s degree in Design, Human-Computer Interaction (HCI), or a related field",
      "Skills: Figma, Adobe XD, Wireframing, Prototyping, User research, Responsive design, Accessibility"
    ],
    applyEmail: "hesbonmanyinsa96@gmail.com"
  },
  {
    title: "Marketing Specialist",
    positions: 1,
    who: "A strategic marketing professional with experience in e-commerce marketing, social media campaigns, and brand development.",
    description: "Plan, execute, and monitor digital marketing campaigns across social media, email, and search engines. Analyze marketing data to provide insights. Collaborate with design and content teams.",
    requirements: [
      "2+ years experience in digital marketing or social media management",
      "Strong understanding of SEO, SEM, and analytics tools",
      "Experience in creating and managing email campaigns",
      "Knowledge of content marketing strategies and trends",
      "Excellent written and verbal communication skills",
      "Creativity and attention to detail for content creation",
      "Ability to analyze campaign performance and adjust strategies accordingly",
      "Bachelor’s degree in Marketing, Business, Communications, or related field",
      "Skills: SEO, Content Marketing, Social Media Marketing, Analytics, Campaign Management, Email Marketing, Data Analysis"
    ],
    applyEmail: "hesbonmanyinsa96@gmail.com"
  }
];

export const Careers = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleJob = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Careers at LuxeStore</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Thank you for choosing LuxeStore! We are currently having 4 positions open. 
        Click on a job to view details.
      </p>

      {jobs.map((job, index) => (
        <section key={index} className="bg-white rounded-lg shadow w-full max-w-4xl mb-4">
          <button
            className="w-full text-left px-6 py-4 font-semibold text-xl focus:outline-none flex justify-between items-center"
            onClick={() => toggleJob(index)}
          >
            {job.title} ({job.positions} Position{job.positions > 1 ? "s" : ""})
            <span>{openIndexes.includes(index) ? "▲" : "▼"}</span>
          </button>
          {openIndexes.includes(index) && (
            <div className="px-6 pb-6">
              <p className="mb-2"><strong>Who we are looking for:</strong> {job.who}</p>
              <p className="mb-2"><strong>Job Description:</strong> {job.description}</p>
              <p className="mb-2"><strong>Requirements:</strong></p>
              <ul className="list-disc pl-5 mb-2">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p><strong>Where to Apply:</strong> 📧 <a href={`mailto:${job.applyEmail}`} className="text-blue-600 hover:underline">Apply Now</a></p>
            </div>
          )}
        </section>
      ))}

      <div className="mt-8">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
