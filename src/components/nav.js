import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>

        {isLoggedIn ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={this.props.logOut}>
                LogOut
              </button>
            </li>
            <li className="nav-item">
              <Link to={"/private-posts"} className="navbar-brand">
                private posts
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn,
  };
}
//Map your action creators to your props.
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
