import React, { Component } from "react";
import "./assets/css/App.css";
import "./assets/css/responsive.css";
import { Router } from "react-router-dom";
import Routes from "./router";
import { history } from "./helpers/history";
import Nav from "./components/nav";
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="fluid-container">
          <Nav />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
