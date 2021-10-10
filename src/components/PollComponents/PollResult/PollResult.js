import React, { Component } from "react";
import { connect } from "react-redux";

export const VotedUser = ({ users, user, authedUser }) => {
  return (
    <span
      className={`${"voted-user-avatar"}  ${
        user === authedUser ? "voted-authed-user-avatar" : ""
      }`}
    >
      <img
        className="avatar"
        src={require(`${users[user].avatarURL}`).default}
        alt="avatar"
      />
    </span>
  );
};

class PollResult extends Component {
  state = {
    barPercentage: (
      (this.props.question[this.props.option].votes.length /
        Object.keys(this.props.users).length) *
      100
    ).toFixed(2),
    questionText: this.props.question[this.props.option].text,
    totalVotes: this.props.question[this.props.option].votes.length,
    totalUsers: Object.keys(this.props.users).length,
    authedUserVoted: this.props.question[this.props.option].votes.includes(
      this.props.authedUser
    ),
    votedUsers: this.props.question[this.props.option].votes,
  };

  render() {
    const {
      barPercentage,
      questionText,
      totalVotes,
      totalUsers,
      authedUserVoted,
      votedUsers,
    } = this.state;
    const { users, authedUser } = this.props;
    return (
      <div
        className={`${"poll-result-container"}  ${
          authedUserVoted ? "voted-question" : ""
        }`}
      >
        <p className="votes-question-container">
          Would you rather{" "}
          <span className="votes-question">{questionText}</span>?
        </p>
        <div className="votes-bar-container">
          <div
            className={`${"votes-bar"}  ${authedUserVoted ? "voted-bar" : ""}`}
            style={{ width: `${barPercentage}%` }}
          >
            <p className="votes-percentage">{barPercentage}%</p>
          </div>
        </div>
        <div>
          <p className="votes-count">
            {totalVotes} out of {totalUsers}
          </p>
          {votedUsers.map((user) => {
            return (
              <VotedUser
                key={user}
                users={users}
                user={user}
                authedUser={authedUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }, { question, option }) => {
  return {
    users,
    authedUser,
    question,
    option,
  };
};

export default connect(mapStateToProps)(PollResult);
