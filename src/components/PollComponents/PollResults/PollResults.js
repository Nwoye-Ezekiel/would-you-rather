import React, { Component } from "react";
import { connect } from "react-redux";
import PollResult from "../PollResult/PollResult";

class PollResults extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <PollResult question={question} option="optionOne" />
        <PollResult question={question} option="optionTwo" />
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }, { id }) => {
  return {
    questions: questions,
    question: questions[id],
  };
};

export default connect(mapStateToProps)(PollResults);
