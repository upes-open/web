import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import EngagementCard from "../components/EngagementCard";
import FacultyCard from "../components/FacultyCard";
import CollabrationCard from "../components/CollabrationCard";

const TeamPage = () => {
  return (
    <div>
      <NavBar />
      <FacultyCard />
      <EngagementCard />
      <CollabrationCard />
      <Footer />
    </div>
  );
};

export default TeamPage;
