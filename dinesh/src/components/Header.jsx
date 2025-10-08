import React from "react";

function Header() {
  return (
    <header className="navbar">
      <span className="logo">
        <img src="/favicon.png" alt="Logo" />
      </span>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
