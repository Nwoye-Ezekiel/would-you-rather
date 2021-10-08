import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../../Redux/actions/authedUser";
import { FaHome, FaPlus, FaBoxes, FaSignOutAlt } from "react-icons/fa";
class Nav extends Component {
  // clear authedUser's data when logging out
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    const { authedUser, users } = this.props;
    return (
      <div class="links">
        <Link to="/home">
          <span class="link">
            <FaHome className="react-icon" />
            Home
          </span>
        </Link>
        <Link to="/add">
          <span class="link">
            <FaPlus className="react-icon" />
            New Question
          </span>
        </Link>
        <Link to="/leaderboard">
          <span class="link">
            <FaBoxes className="react-icon" />
            Leaderboard
          </span>
        </Link>

        {/* user's image and logout link not accessible when a user is not authenticated. (noticable on the login page) */}
        {authedUser && (
          <div class="authed-user-section">
            <Link to="">
              <div class="authed-user-details">
                <span class="authed-username">
                  <img
                    className="authed-avatar"
                    src={require(`${users[authedUser].avatarURL}`).default}
                    alt=""
                  />
                  {users[authedUser].name}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <span class="link" onClick={this.handleLogout}>
                <FaSignOutAlt className="react-icon" />
                Logout
              </span>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

// retrieve authedUser and users data from the redux state
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Nav);
