import React, { Component } from "react";
import { connect } from "react-redux";

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
              <span
                className={`${"voted-user-avatar"}  ${
                  user === authedUser ? "voted-authedUser-avatar" : ""
                }`}
              >
                <img
                  className="avatar"
                  src={require(`${users[user].avatarURL}`).default}
                  alt=""
                />
                {/* {users[user].name} */}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

// retrieve users and authedUser data from the redux state and question and option data from the component props
const mapStateToProps = ({ users, authedUser }, { question, option }) => {
  return {
    users,
    authedUser,
    question,
    option,
  };
};

export default connect(mapStateToProps)(PollResult);
