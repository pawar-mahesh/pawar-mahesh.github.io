import React from "react";
import Home from "../pages/home/HomeComponent";

const Main = (props) => {
  return <Home {...props} theme={props.theme} />;
};

export default Main;
