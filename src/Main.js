import React from "react";
import Home from "./components/Home/Home";

const Main = (props) => {
  const theme = props.theme;
  return <Home theme={theme} />;
};

export default Main;
