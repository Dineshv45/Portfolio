import React, { useRef } from "react";
import HackerText from "./HackerText";

function Projects() {
  const containerRef = useRef(null);

  const projects = [
     {
    title: "NoteStack (Collaborative Note-Taking Platform)",
    tech: "Next.js, Supabase, Tailwind CSS",
    description: [
      "Developed a real-time note-taking and collaboration platform that allows users to create, edit, share, and manage notes securely.",
      "Implemented authentication, Markdown editor, and real-time synchronization using Supabase.",
      "Designed a responsive and interactive interface for seamless note sharing, importing/exporting, and multi-user collaboration.",
    ],
    video: "/videos/NoteStack.mp4", 
    link: "https://note-stack-eight.vercel.app/", 
  },
    {
      title: "Code Reviewer (AI-Powered Code Analysis Tool)",
      tech: "React.js, Node.js, Express.js, Google Gemini API",
      description: [
        "Developed an interactive code editor with AI-powered code reviews and optimized suggestions.",
        "Integrated syntax highlighting, animated loaders, and auto-scroll for better UX.",
        "Deployed the app on Vercel and Render for scalability.",
      ],
      video: "/videos/code-reviewer.mp4",
      link: "https://code-reviewer-sandy-beta.vercel.app/",
    },
    {
      title: "YourPharma (Online Medical and Doctor Appointment Booking)",
      tech: "HTML, CSS, JavaScript, Node.js, GSAP",
      description: [
        "Built a doctor appointment booking system with a dynamic, intuitive interface.",
        "Implemented form validation and error handling for bookings.",
        "Integrated NodeMailer for automated appointment notifications.",
        "Added search and filter for doctors by specialization, location, and availability.",
      ],
      video: "/videos/yourPharma.mp4",
      link: "https://dineshv45.github.io/yourpharma/index.html",
    },
    {
      title: "CustomWear (E-Commerce Website)",
      tech: "HTML, CSS, JavaScript, Django, MySQL",
      description: [
        "Built an e-commerce website for apparel and handmade products.",
        "Added buyer/seller accounts, cart functionality, and secure payment integration.",
        "Designed a seamless user experience for browsing, purchasing, and selling.",
      ],
      video: "/videos/CustomWear.mp4",
      link: "https://github.com/Dineshv45/CustomWear",
    },
    {
      title: "CountriesExplorer",
      tech: "HTML, CSS, JavaScript, Restful APIs",
      description: [
        "Built a responsive web application to display country data using the REST Countries API.",
        "Implemented search, region-based filters, dark mode, and skeleton loading for enhanced user experience.",
        "Focused on clean UI design, efficient API integration, and smooth performance across devices.",
      ],
      video: "/videos/CountriesExplorer.mp4",
      link: "https://dineshv45.github.io/CountriesExplorer/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <HackerText text="Projects" />
      <div className="projects-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div key={index} className="project-card-inner">
            <div className="project-card-content">
              {/* Text Section */}
              <div className="project-text">
                <h2>{project.title}</h2>
                <p className="tech">Tech Stack: {project.tech}</p>
                <div className="project-text flex flex-col items-center md:items-start">
  <ul className="list-disc list-inside space-y-2 text-center md:text-left">
    {project.description.map((desc, i) => (
      <li key={i}>{desc}</li>
    ))}
  </ul>
</div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Visit Live Site →
                </a>
              </div>

              {/* Video Section */}
              <div className="project-video">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-preview"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
