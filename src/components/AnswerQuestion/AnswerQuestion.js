import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../../Redux/actions/answers";

class AnswerQuestion extends Component {
  state = {
    optionOneText: this.props.question.optionOne.text,
    optionTwoText: this.props.question.optionTwo.text,
    answer: null,
  };

  // handle selected answer option
  handleOption = (event) => this.setState({ answer: event.target.value });

  // handle poll answer submission
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      handleAddAnswer({
        authedUser: this.props.authedUser,
        qid: this.props.question.id,
        answer: this.state.answer,
      })
    );
  };

  render() {
    const { optionOneText, optionTwoText, answer } = this.state;
    return (
      <form onChange={this.handleOption} onSubmit={this.handleSubmit}>
        <div className="question-option-container">
          <div className="radio-button-container">
            <input
              type="radio"
              id="optionOne"
              name="questionOption"
              value="optionOne"
            />
          </div>
          <label className="question-option-text" htmlFor="optionOne">
            {optionOneText}
          </label>
        </div>
        <br />
        <div className="question-option-container">
          <div className="radio-button-container">
            <input
              type="radio"
              id="optionTwo"
              name="questionOption"
              value="optionTwo"
            />
          </div>
          <label className="question-option-text" htmlFor="optionTwo">
            {optionTwoText}
          </label>
        </div>
        <br />
        <button
          className="submit-answer-button"
          type="submit"
          disabled={!answer}
        >
          submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }, { id }) => {
  return {
    id,
    questions,
    authedUser,
    question: questions[id],
  };
};

export default connect(mapStateToProps)(AnswerQuestion);