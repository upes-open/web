import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import FacultyCard from "../components/FacultyCard";
import CollaborationCard from "../components/CollaborationCard";
import AlumniCard from "../components/AlumniCard";
import TeamSlider from "../components/TeamSlider";
import { SliderData } from "../data/SliderData";


const TeamPage = () => {
  return (
    <div>
      <NavBar />
      <TeamSlider images={SliderData} /> 
      <FacultyCard />
      <TeamCard />
      <CollaborationCard />
      <AlumniCard />
      <Footer />
    </div>
  );
};

export default TeamPage;
