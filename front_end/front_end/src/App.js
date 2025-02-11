import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ProjectPage from "./pages/ProjectPage";
// import SkillsPage from "./pages/SkillsPage";
// import ServicePage from "./pages/ServicePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
