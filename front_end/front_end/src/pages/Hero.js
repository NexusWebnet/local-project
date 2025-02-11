import React from 'react';
//import './Hero.css';
import profilePic from './assets/logo.png'; // Replace with the actual path to your picture

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Biney is a Full Stack Web Developer</h1>
        <p className="hero-subtitle">
          I create dynamic and responsive web applications to help users achieve their goals.
        </p>
        <blockquote className="hero-quote">
          "Building a better web, one line of code at a time."
        </blockquote>
      </div>

      <div className="image-overlay">
        <div className="green-box">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
