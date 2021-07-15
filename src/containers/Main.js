import React from "react";
import Home from "../pages/home/HomeComponent";
import { Route, Switch, HashRouter } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={props.theme} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Main;
