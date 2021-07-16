import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";

const Main = (props) => {
  const theme = props.theme;
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Splash {...props} theme={theme} />}
          />
          <Route
            path="/splash"
            render={(props) => <Splash {...props} theme={theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} theme={theme} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Main;
