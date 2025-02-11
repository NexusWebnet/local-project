import React from "react";
import "./services.css";

const ServicePage = () => {
  return (
    <div className="service-page">
      <h2>My Services</h2>
      <div className="service-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Building responsive, fast, and modern websites tailored to your needs.
          </p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            Designing user-friendly interfaces with a focus on aesthetics and usability.
          </p>
        </div>
        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>
            Improving your site's visibility on search engines to drive traffic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
