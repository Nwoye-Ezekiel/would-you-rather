import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../../Redux/actions/authedUser";
import { FaHome, FaPlus, FaBoxes, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

export const AuthedUser = ({ users, authedUser }) => {
  console.log("Users", users, "authedUser", authedUser);
  return (
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
  );
};

export const DesktopNav = ({ users, authedUser }) => {
  console.log("Users", users, "authedUser", authedUser);
  return (
    <div class="links">
      <NavList />
    </div>
  );
};

export const NavList = ({ users, authedUser, handleLogout, flexDirection, closeDropdown }) => {
  return (
    <div className={`${"links"} ${flexDirection ? flexDirection : ""}`}>
      <Link onClick={closeDropdown} to="/home">
        <span class="link">
          <FaHome className="react-icon" />
          Home
        </span>
      </Link>
      <Link onClick={closeDropdown} to="/add">
        <span class="link">
          <FaPlus className="react-icon" />
          New Question
        </span>
      </Link>
      <Link onClick={closeDropdown} to="/leaderboard">
        <span class="link">
          <FaBoxes className="react-icon" />
          Leaderboard
        </span>
      </Link>

      {/* user's image and logout link not accessible when a user is not authenticated. (noticable on the login page) */}
      {authedUser && (
        <div class="authed-user-section">
          <AuthedUser users={users} authedUser={authedUser} />
          <Link onClick={closeDropdown} to="/login">
            <span class="link" onClick={handleLogout}>
              <FaSignOutAlt className="react-icon" />
              Logout
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

class Nav extends Component {
  state = {
    dropdown: false,
  };
  // clear authedUser's data when logging out
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  render() {
    const { authedUser, users } = this.props;
    const { dropdown } = this.state;
    return (
      <div class="links">
        <div
          className={`${"mobile-dropdown-nav"} ${
            dropdown ? "slide-down" : "slide-up"
          }`}
        >
          <span
            className={`${"link"} ${"close-button"}`}
            onClick={this.toggleDropdown}
          >
            <FaTimes
              style={{ fontSize: "25px", color: "white", margin: "0" }}
              className="react-icon"
            />
          </span>
          <NavList
            users={users}
            authedUser={authedUser}
            handleLogout={this.handleLogout}
            flexDirection="column"
            closeDropdown={this.toggleDropdown}
          />
        </div>

        <div className="mobile-nav">
          {authedUser && <AuthedUser users={users} authedUser={authedUser} />}
          {!authedUser && (
            <span class="link">
              <h3>Would you rather</h3>
            </span>
          )}
          <span class="link" onClick={this.toggleDropdown}>
            <FaBars
              style={{ fontSize: "25px", color: "white", margin: "0" }}
              className="react-icon"
            />
          </span>
        </div>

        <div className="desktop-nav">
          <NavList
            users={users}
            authedUser={authedUser}
            handleLogout={this.handleLogout}
          />
        </div>
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
