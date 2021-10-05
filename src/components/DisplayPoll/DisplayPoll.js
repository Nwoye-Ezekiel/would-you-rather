import React, { Component } from "react";
import { connect } from "react-redux";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

class DisplayPoll extends Component {
  state = {
    answered: false,
    id: null,
  };
  componentWillMount() {
    const id = this.props.match.params.question_id;

    this.setState(
      {
        answered:
          this.props.questions[id].optionOne.votes.includes(
            this.props.authedUser
          ) ||
          this.props.questions[id].optionTwo.votes.includes(
            this.props.authedUser
          ),
        id: id,
      },
      () => {
        console.log(
          "Answered? : ",
          this.state.answered,
          "id : ",
          this.state.id
        );
      }
    );
  }

  render() {
    const { answered, id } = this.state;
    return !answered && <AnswerQuestion id={id} />;
  }
}

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser: authedUser,
    questions: questions,
  };
};

export default connect(mapStateToProps)(DisplayPoll);
