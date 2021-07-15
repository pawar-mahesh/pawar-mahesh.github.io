import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Fade } from "react-reveal";
import SeoHeader from "../SeoHeader/SeoHeader";

const Header = (props) => {
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };
  const theme = props.theme;

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
