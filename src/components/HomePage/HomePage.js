import React from "react";
import ProfilePic from "../../img/profile_img.png";
import Card from "../Card";
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const jobProfile = "Digital Specialist Engineer";
  const companyName = "Infosys";
  return (
    <div>
      <Card className="cardProfile">
        <img src={ProfilePic} alt="Profile" />
      </Card>
      <h1 className="name">Mahesh Pawar</h1>
      <h4 className="currentJob">
        {jobProfile} at {companyName}
      </h4>
      <div className="border" />
      <NavBar />
    </div>
  );
};

export default HomePage;
