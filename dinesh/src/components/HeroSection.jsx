import React, { useEffect, useState } from "react";
import HeroBackground from "./HeroBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const roles = ["Full Stack Developer", "Front End Developer", "Software Engineer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let typingSpeed = deleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roles, roleIndex]);

  return (
    <section className="hero-section relative overflow-hidden" id="home">
      {" "}
      <div className="hero-background">
        {" "}
        <HeroBackground />{" "}
      </div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>Dinesh Vattipally</h1>
          
          <p>
            <span className="typing-text">{text}</span>
            <span className="cursor"></span>
          </p>

          <a
    href="/videos/DineshResume.pdf" 
    download
    className="download-btn"
  >
    Download Resume
  </a>
        </div>

        <div className="hero-logo">
          <img src="/logod2.png" alt="Logo" />
        </div>
      </div>
      <button className="scroll-btn" aria-label="Scroll down">
        <a href="#skills">
          Scroll Down
          <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
        </a>
      </button>
    </section>
  );
}
