import React, { Component } from "react";
import { connect } from "react-redux";

class PollResult extends Component {
  state = {
    barPercentage: ((this.props.question[this.props.option].votes.length / Object.keys(this.props.users).length) * 100).toFixed(2),
    questionText: this.props.question[this.props.option].text,
    totalVotes: this.props.question[this.props.option].votes.length,
    totalUsers: Object.keys(this.props.users).length,
    authedUserVoted: this.props.question[this.props.option].votes.includes(this.props.authedUser),
    counter: 0,
  };

  render() {
    const { barPercentage,  questionText, totalVotes, totalUsers} = this.state;
    return (
      <div className="poll-result-container">
        {questionText}
        <div className="votes-bar-container">
        <div className="votes-bar" style={{width: `${barPercentage}%`}}><p className="votes-percentage">{barPercentage}%</p></div>
        </div>
        {this.state.authedUserVoted && "Voted"}
        <div>
          {totalVotes} out of {totalUsers}
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
