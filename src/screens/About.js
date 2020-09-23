import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "About",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  clickMe = () => {
    alert("Hello");
  };
  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  Input = () => {
    return (
      <input
        type="text"
        value={this.state.message}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <div className="class">
        <h1>{this.state.message}</h1>
        <button onClick={this.clickMe}>ClickMe</button>
        {this.Input()}
      </div>
    );
  }
}

export default About;
