import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../../Redux/actions/answers";

class AnswerQuestion extends Component {
  state = {
    optionOneText: this.props.question.optionOne.text,
      optionTwoText: this.props.question.optionTwo.text,
    answer: null,
  };
  

  handleOption = (event) => {
    this.setState({ answer: event.target.value });
  };
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
      <div>
        <form onChange={this.handleOption} onSubmit={this.handleSubmit}>
          <input
            type="radio"
            id="optionOne"
            name="questionOption"
            value="optionOne"
          />
          <label htmlFor="optionOne">{optionOneText}</label>
          <br />
          <input
            type="radio"
            id="optionTwo"
            name="questionOption"
            value="optionTwo"
          />
          <label htmlFor="optionTwo">{optionTwoText}</label>
          <br />
          <button type="submit" disabled={!answer}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }, { id }) => {
  return {
    id: id,
    questions: questions,
    authedUser: authedUser,
    question: questions[id],
  };
};

export default connect(mapStateToProps)(AnswerQuestion);