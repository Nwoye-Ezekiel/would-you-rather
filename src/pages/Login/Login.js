import { React, Component } from "react";
import Select from "react-select";
import Unknown from "./assets/placeholderImage/unknown.svg";
import { connect } from "react-redux";
import { setAuthedUser } from "../../Redux/actions/authedUser";
import { withRouter } from "react-router";

// custom styles for the Select component gotten from the react-select package
const customStyles = {
  control: (base) => ({
    ...base,
    height: 50,
    cursor: "pointer",
    background: "#DEEDFE",
    border: "none",
    outline: "none",
    "border-radius": "5px",
  }),
};

class Login extends Component {
  // set initial pathname for instances where the address bar is types manually which redirects to the login page and back to the initial address entered
  // gets and stores the first address enetered and then opens it after authentication.
  state = {
    initialPathname: this.props.location.state
      ? this.props.location.state.initialPathname === "/"
        ? "/home"
        : this.props.location.state.initialPathname
      : "/home",
    authedUsers: this.props.authedUsers,
    authedUser: null,
  };

  // change the authedUser from the dropdown
  changeAuthedUser = (authedUser) => {
    this.setState({ authedUser });
  };

  // handle sign in after user has been authenticated to show the correct page.
  handleSignIn = () => {
    this.props.dispatch(setAuthedUser(this.state.authedUser.id));
    this.props.history.push(`${this.state.initialPathname}`);
  };

  render() {
    const { authedUsers, authedUser } = this.state;

    return (
      <div className="login-wrapper">
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <hr />
          <Select
            placeholder={
              <div className="avatar-container">
                <img className="avatar" src={Unknown} alt="" />
                Select a user{" "}
              </div>
            }
            value={authedUser}
            onChange={this.changeAuthedUser}
            options={authedUsers}
            styles={customStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
          <button
            className="login-button"
            onClick={this.handleSignIn}
            disabled={!authedUser}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
}

// retrieve users from the redux state and returns an object of properties for the Select component
function mapStateToProps({ users }) {
  return {
    authedUsers: Object.keys(users).map((user) => {
      return {
        value: users[user].name,
        id: users[user].id,
        label: (
          <div className="avatar-container">
            <img
              className="avatar"
              src={require(`${users[user].avatarURL}`).default}
              alt=""
            />
            {users[user].name}
          </div>
        ),
      };
    }),
  };
}

export default withRouter(connect(mapStateToProps)(Login));
