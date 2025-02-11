import React from "react";
import "./SkillsPage.css";

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      <p>
        Over the years, I have honed a variety of technical and interpersonal
        skills that allow me to build exceptional projects.
      </p>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Database Management</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Database Management</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Webpack</li>
            <li>Figma (for design)</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
