import React from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Careers at LuxeStore</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Thank you for choosing LuxeStore! We are currently having 4 positions open. 
        Below you will find detailed descriptions for each job.
      </p>

      {/* Frontend Developer */}
      <section className="bg-white rounded-lg shadow p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frontend Developer (1 Position)</h2>
        <p className="mb-2"><strong>Who we are looking for:</strong> A highly motivated frontend developer passionate about building fast, responsive, and accessible web applications.</p>
        <p className="mb-2"><strong>Job Description:</strong> Develop and maintain interactive, responsive, and user-friendly web applications. Collaborate with designers and backend developers. Optimize applications for speed and scalability.</p>
        <ul className="list-disc pl-5 mb-2">
          <li>2+ years experience with React, Next.js, or similar frameworks</li>
          <li>Experience with state management tools like Redux or Context API</li>
          <li>Strong understanding of HTML5, CSS3, JavaScript, and TypeScript</li>
          <li>Familiarity with REST APIs and GraphQL</li>
          <li>Knowledge of responsive design and cross-browser compatibility</li>
          <li>Experience with Git and version control</li>
          <li>Understanding of accessibility (WCAG) and SEO best practices</li>
        </ul>
        <p><strong>Education:</strong> Bachelor’s degree in Computer Science, Software Engineering, or a related field</p>
        <p><strong>Skills:</strong> React, TypeScript, Tailwind CSS, HTML/CSS, JavaScript, UI/UX awareness</p>
        <p><strong>Where to Apply:</strong> 📧 <a href="mailto:hesbonmanyinsa96@gmail.com" className="text-blue-600 hover:underline">Apply Now</a></p>
      </section>

      {/* Backend Developer */}
      <section className="bg-white rounded-lg shadow p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">Backend Developer (1 Position)</h2>
        <p className="mb-2"><strong>Who we are looking for:</strong> A results-driven backend developer with experience building scalable APIs and handling database architectures for e-commerce platforms.</p>
        <p className="mb-2"><strong>Job Description:</strong> Design and implement robust backend solutions using Node.js and Express. Build and maintain RESTful APIs. Ensure application security, data protection, and system reliability.</p>
        <ul className="list-disc pl-5 mb-2">
          <li>3+ years experience with Node.js, Express, and database systems (PostgreSQL, MySQL)</li>
          <li>Experience designing RESTful APIs and understanding of authentication/authorization</li>
          <li>Strong knowledge of SQL and database schema design</li>
          <li>Familiarity with cloud services (AWS, Azure, or GCP)</li>
          <li>Understanding of caching, queues, and microservices architecture</li>
          <li>Strong debugging, problem-solving, and optimization skills</li>
          <li>Experience with CI/CD pipelines and automated testing frameworks</li>
        </ul>
        <p><strong>Education:</strong> Bachelor’s degree in Computer Science, Information Systems, or related field</p>
        <p><strong>Skills:</strong> Node.js, Express, PostgreSQL/MySQL, API design, JWT Authentication, Cloud services, CI/CD</p>
        <p><strong>Where to Apply:</strong> 📧 <a href="mailto:hesbonmanyinsa96@gmail.com" className="text-blue-600 hover:underline">Apply Now</a></p>
      </section>

      {/* UI/UX Designer */}
      <section className="bg-white rounded-lg shadow p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">UI/UX Designer (1 Position)</h2>
        <p className="mb-2"><strong>Who we are looking for:</strong> A creative and detail-oriented designer to craft seamless, intuitive, and visually appealing experiences for our users.</p>
        <p className="mb-2"><strong>Job Description:</strong> Design user interfaces for web and mobile applications. Create wireframes, mockups, and interactive prototypes. Conduct user research and usability testing. Collaborate with developers.</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Portfolio demonstrating expertise in UI/UX design</li>
          <li>Proficiency with Figma, Sketch, or Adobe XD</li>
          <li>Knowledge of responsive design principles and accessibility standards</li>
          <li>Experience conducting user research and usability testing</li>
          <li>Strong understanding of design systems and component libraries</li>
          <li>Ability to work in an agile development environment</li>
          <li>Excellent communication and collaboration skills</li>
        </ul>
        <p><strong>Education:</strong> Bachelor’s degree in Design, Human-Computer Interaction (HCI), or a related field</p>
        <p><strong>Skills:</strong> Figma, Adobe XD, Wireframing, Prototyping, User research, Responsive design, Accessibility</p>
        <p><strong>Where to Apply:</strong> 📧 <a href="mailto:hesbonmanyinsa96@gmail.com" className="text-blue-600 hover:underline">Apply Now</a></p>
      </section>

      {/* Marketing Specialist */}
      <section className="bg-white rounded-lg shadow p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">Marketing Specialist (1 Position)</h2>
        <p className="mb-2"><strong>Who we are looking for:</strong> A strategic marketing professional with experience in e-commerce marketing, social media campaigns, and brand development.</p>
        <p className="mb-2"><strong>Job Description:</strong> Plan, execute, and monitor digital marketing campaigns across social media, email, and search engines. Analyze marketing data to provide insights. Collaborate with design and content teams.</p>
        <ul className="list-disc pl-5 mb-2">
          <li>2+ years experience in digital marketing or social media management</li>
          <li>Strong understanding of SEO, SEM, and analytics tools</li>
          <li>Experience in creating and managing email campaigns</li>
          <li>Knowledge of content marketing strategies and trends</li>
          <li>Excellent written and verbal communication skills</li>
          <li>Creativity and attention to detail for content creation</li>
          <li>Ability to analyze campaign performance and adjust strategies accordingly</li>
        </ul>
        <p><strong>Education:</strong> Bachelor’s degree in Marketing, Business, Communications, or related field</p>
        <p><strong>Skills:</strong> SEO, Content Marketing, Social Media Marketing, Analytics, Campaign Management, Email Marketing, Data Analysis</p>
        <p><strong>Where to Apply:</strong> 📧 <a href="mailto:hesbonmanyinsa96@gmail.com" className="text-blue-600 hover:underline">Apply Now</a></p>
      </section>

      {/* Single Back to Home button at the end */}
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
