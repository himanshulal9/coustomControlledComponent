import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./component/dashboard";
import GymProfile from "./component/gymProfile";
const AppMainContainer = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/gymProfile" component={GymProfile} />
      </Switch>
    </Fragment>
  );
};

export default AppMainContainer;
