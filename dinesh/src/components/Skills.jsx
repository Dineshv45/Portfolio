import React from "react";
import HackerText from "./HackerText";

function Skills() {
  return (
    <section className="skill-section" id="skills">
      <HackerText text="Skills" />
      <div className="skill-set">
        {/* Frontend */}
        <div className="skill-group frontend">
          <h2>Frontend</h2>
          <ul>
            <li><span>Next.js</span></li>
            <li><span>React</span></li>
            <li><span>JavaScript</span></li>
            <li><span>CSS</span></li>
            <li><span>TailWind</span></li>
            <li><span>HTML</span></li>
          </ul>
        </div>

        {/* Backend & Database */}
        <div className="skill-group backend">
          <h2>Backend & Database</h2>
          <ul>
            <li><span>Node</span></li>
            <li><span>Express</span></li>
            <li><span>Django</span></li>
            <li><span>MySQL</span></li>
            <li><span>MongoDB</span></li>
             <li><span>Supabase</span></li>
          </ul>
        </div>

        {/* Others */}
        <div className="skill-group others">
          <h2>Others</h2>
          <ul>
            <li><span>Java</span></li>
            <li><span>Python</span></li>
            <li><span>DSA</span></li>
            <li><span>Git/Github</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
