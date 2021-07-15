import React from "react";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import TopButton from "../TopButton/TopButton";

const Home = (props) => {
  return (
    <div>
      <Header theme={props.theme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Home;
