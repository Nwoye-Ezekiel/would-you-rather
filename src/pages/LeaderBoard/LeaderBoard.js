import React, { Component } from "react";
import { connect } from "react-redux";
import Podium from "../../components/Podium/Podium";

class LeaderBoard extends Component {
  // sort the users after the component has mounted
  componentDidMount() {
    this.sortUsers(this.props.users);
  }

  // sort the users based on thier score which is the addition of their answered questions and questions created
  sortUsers(users) {
    users = Object.keys(users).map((user) => {
      return {
        ...users[user],
        score:
          users[user].questions.length +
          Object.keys(users[user].answers).length,
      };
    });
    return users.sort((a, b) => b.score - a.score);
  }

  render() {
    const { users } = this.props;

    return (
      <div className="module">
        <div className="module-wrapper">
          <h3 className="module-title">Leaderboard</h3>
          {this.sortUsers(users).map((user, index) => {
            return (
              <Podium
                id={user.id}
                key={user.id}
                position={index + 1}
                name={user.name}
                questionsAnswered={Object.keys(user.answers).length}
                questionsCreated={user.questions.length}
                score={user.score}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);