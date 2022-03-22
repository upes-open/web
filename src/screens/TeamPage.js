import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import FacultyCard from "../components/FacultyCard";
import CollaborationCard from "../components/CollaborationCard";
import AlumniCard from "../components/AlumniCard";
const TeamPage = () => {
  return (
    <div>
      <NavBar />
      <FacultyCard />
      <TeamCard />
      <CollaborationCard />
      <AlumniCard />
      <Footer />
    </div>
  );
};

export default TeamPage;
