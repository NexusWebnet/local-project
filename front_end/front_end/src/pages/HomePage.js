import React from "react";
import "./HomePage.css";
import About from "./About";
import ProjectPage from "./ProjectPage";
import SkillsPage from "./SkillsPage";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import profile from "./assets/logo.png";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">I'm a Web Developer</h1>
          <p className="hero-subtitle">
            I build modern, responsive, and scalable websites to bring your ideas to life.
          </p>
          <button className="cta-button">View My Work</button>
        </div>
        <div className="hero-image">
          <img
            src={profile} // Ensure the correct path to your image
            alt="Web Developer"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Project Section */}
      <section id="projects">
        <ProjectPage />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsPage />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicePage />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
};

export default HomePage;
