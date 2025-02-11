import React from "react";
import "./ProjectPage.css";
import profile from "./assets/logo.png";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={profile} alt="Project 1" />
          <h3>Project 1</h3>
          <p>A short description of Project 1.</p>
        </div>
        <div className="project-card">
          <img src={profile} alt="Project 2" />
          <h3>Project 2</h3>
          <p>A short description of Project 2.</p>
        </div>
        <div className="project-card">
          <img src={profile} alt="Project 3" />
          <h3>Project 3</h3>
          <p>A short description of Project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
