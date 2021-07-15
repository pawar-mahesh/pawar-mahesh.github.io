import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

const Footer = () => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: "#5A6377" }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
      </Fade>
    </div>
  );
};

export default Footer;
