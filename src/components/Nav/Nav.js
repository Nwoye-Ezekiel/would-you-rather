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
        <Link to="/home">
          <div>Home</div>
        </Link>
        <Link to="/new-question">
          <div>New Question</div>
        </Link>
        <Link to="/leaderboard">
          <div>Leaderboard</div>
        </Link>
        <Link to="/">
          <div>Logout</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
