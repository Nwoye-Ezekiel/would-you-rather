import { React, Component } from "react";
import Select from "react-select";
import Unknown from "./assets/placeholderImage/unknown.svg";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";
import { withRouter } from "react-router";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 50,
    cursor: "pointer",
  }),
};

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

class Login extends Component {
  state = {
    authedUsers: {},
    authedUser: null,
  };
  
  

  componentDidMount() {
    this.setState({ authedUsers: this.props.authedUsers });
  }

  changeAuthedUser = (authedUser) => {
    this.setState({ authedUser });
  };

  handleSignIn = () => {
    this.props.dispatch(setAuthedUser(this.state.authedUser.id));
    this.props.history.push("/");
    
  };


  render() {
    const { authedUsers, authedUser } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
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
        />
        <button onClick={this.handleSignIn} disabled={!authedUser}>
          Sign in
        </button>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Login));
