import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const iconSize = "3x"; // FontAwesome predefined size: 2x, 3x, 4x, etc.

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/dinesh_v45?igsh=MWtscWlzZThuOGJxdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </a>
          <a
            href="https://www.linkedin.com/in/dinesh-vattipally-aa4a272b2"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
          </a>
          <a
            href="https://github.com/Dineshv45"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} size={iconSize} />
          </a>
          <a
            href="https://leetcode.com/u/VDinesh45/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faCode} size={iconSize} />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} <span>Dinesh Vattipally</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
