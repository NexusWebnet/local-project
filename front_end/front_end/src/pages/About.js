import React from 'react';
import './About.css';
import profilePic from './assets/logo.png'; // Replace with the actual path to your picture

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I’m a full-stack web developer with a passion for creating responsive 
            and user-friendly web applications. My expertise spans both frontend and 
            backend technologies, enabling me to deliver seamless digital experiences.
          </p>
          <p className="about-description">
            I enjoy exploring new technologies and am always eager to learn more, 
            striving to enhance my skills and deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
