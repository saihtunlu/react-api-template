import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../screens/Login";
import Posts from "../screens/Posts";
import Home from "../screens/Home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/private-posts" component={Posts} />
      </Switch>
    );
  }
}

export default Routes;
