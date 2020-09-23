import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import UserService from "../services/user.service";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      UserService.getPrivatePosts().then((response) => {
        console.log("Posts -> componentDidMount -> response", response);
      });
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <h1>Logged In</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(Posts);
