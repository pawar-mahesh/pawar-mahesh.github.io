import React from "react";
import "./NavBar.css";
import Home from "../Home/Home";

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div className="buttonAlignment">
          <button>About</button>
          <button>Education</button>
          <button>Experience</button>
          <button>Projects</button>
          <button>Skills</button>
          <button>Contact Me</button>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default NavBar;
