import React, { Component } from "react";
import { connect } from "react-redux";
import Podium from "../../components/Podium/Podium";

class LeaderBoard extends Component {
  componentDidMount() {
    this.sortUsers(this.props.users);
  }

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
      <div>
        <div>LeaderBoard</div>
        <div>
          {this.sortUsers(users).map((user, index) => {
            return (
              <Podium
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
