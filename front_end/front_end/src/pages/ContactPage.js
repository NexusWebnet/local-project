import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>
        Have any questions or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
