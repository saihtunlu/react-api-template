import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Home",
    };
  }
  render() {
    return (
      <div className="class">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Home;
