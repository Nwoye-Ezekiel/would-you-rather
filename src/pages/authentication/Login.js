import { React, Component } from "react";
import Select from "react-select";
import Unknown from "./assets/images/users/unknown.svg";
import { users } from "./utils/users";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 50,
    cursor: "pointer",
  }),
};

class Login extends Component {
  state = {
    authedUser: null,
  };

  handleAuthedUser = (authedUser) => {
    this.setState({ authedUser });
    console.log(authedUser);
  };

  render() {
    const { authedUser } = this.state;

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
          onChange={this.handleAuthedUser}
          options={users}
          styles={customStyles}
        />
      </div>
    );
  }
}

export default Login;
