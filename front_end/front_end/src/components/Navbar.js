import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">MyPortfolio</a>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50} // Adjust offset if there's a sticky navbar
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
