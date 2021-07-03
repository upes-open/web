import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import FetchProjects from "../components/FetchProjects";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <FetchProjects />
      <Footer />
    </div>
  );
};

export default Projects;
