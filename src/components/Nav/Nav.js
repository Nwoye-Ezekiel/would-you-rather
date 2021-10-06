import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../../Redux/actions/authedUser";
class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    const { authedUser, users } = this.props;
    return (
      <div>
        <Link to="/home">
          <div>Home</div>
        </Link>
        <Link to="/add">
          <div>New Question</div>
        </Link>
        <Link to="/leaderboard">
          <div>Leaderboard</div>
        </Link>

        {authedUser && (
          <div>
            <div>
              {users[authedUser].name}
              <img
                className="avatar"
                src={require(`${users[authedUser].avatarURL}`).default}
                alt=""
              />
            </div>
            <Link to="/login">
              <div onClick={this.handleLogout}>Logout</div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: authedUser,
    users: users,
  };
};

export default connect(mapStateToProps)(Nav);
