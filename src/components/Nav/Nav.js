import { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    temp: [],
  };

  render() {
    return (
      <div>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/add">
          <div>New Question</div>
        </Link>
        <Link to="/leaderboard">
          <div>Leaderboard</div>
        </Link>
        <Link to="/login">
          <div>Logout</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
 