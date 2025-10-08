import React from "react";
import { useParams, Link } from "react-router-dom";
import HackerText from "./HackerText";

// ✅ Centralized project data (same slugs as in Projects.jsx)
const projectData = {
  "code-reviewer": {
    title: "Code Reviewer (AI-Powered Code Analysis Tool)",
    tech: "React.js, Node.js, Express.js, Google Gemini API",
    description: [
      "Developed an interactive code editor with AI-powered code reviews and optimized suggestions.",
      "Integrated syntax highlighting, animated loaders, and auto-scroll for better UX.",
      "Deployed the app on Vercel and Render for scalability.",
    ],
    video: "/videos/code-reviewer.mp4",
  },
  yourpharma: {
    title: "YourPharma (Online Medical and Doctor Appointment Booking)",
    tech: "HTML, CSS, JavaScript, Node.js, GSAP",
    description: [
      "Built a doctor appointment booking system with a dynamic, intuitive interface.",
      "Implemented form validation and error handling for bookings.",
      "Integrated NodeMailer for automated appointment notifications.",
      "Added search and filter for doctors by specialization, location, and availability.",
    ],
    video: "/videos/yourPharma.mp4",
  },
  customwear: {
    title: "CustomWear (E-Commerce Website)",
    tech: "HTML, CSS, JavaScript, Django, MySQL",
    description: [
      "Built an e-commerce website for apparel and handmade products.",
      "Added buyer/seller accounts, cart functionality, and secure payment integration.",
      "Designed a seamless user experience for browsing, purchasing, and selling.",
    ],
    video: "/videos/CustomWear.mp4",
  },
  "countries-explorer": {
    title: "CountriesExplorer",
    tech: "HTML, CSS, JavaScript, Restful APIs",
    description: [
      "Built a responsive web application to display country data using the REST Countries API.",
      "Implemented search, region-based filters, dark mode, and skeleton loading for enhanced UX.",
      "Focused on clean UI design, efficient API integration, and smooth performance across devices.",
    ],
    video: "/videos/CountriesExplorer.mp4",
  },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <section className="project-detail-section not-found">
        <HackerText text="Project Not Found" />
        <p style={{ color: "#fff", textAlign: "center" }}>
          Sorry, the project you’re looking for doesn’t exist.
        </p>
        <div className="back-btn-container">
          <Link to="/" className="back-btn">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section">
      <HackerText text={project.title} />

      <div className="project-detail-content">
        <p className="tech">Tech Stack: {project.tech}</p>

        <ul className="project-desc">
          {project.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>

        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="project-detail-video"
        />

        <div className="back-btn-container">
          <Link to="/" className="back-btn">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
