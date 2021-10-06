import React, { Component } from "react";
import { connect } from "react-redux";
import AnswerQuestion from "../../AnswerQuestion/AnswerQuestion";
import PollResults from "../PollResults/PollResults";
import Page404 from "../../Page404/Page404";

class DisplayPoll extends Component {
  state = {
    answered: false,
    id: null,
    is404page: false,
  };

  UNSAFE_componentWillMount() {
    const id = this.props.match.params.question_id;

    if (this.props.questions[id] === undefined) {
      this.setState({ is404page: true });
    } else {
      this.setState({
        answered:
          this.props.questions[id].optionOne.votes.includes(
            this.props.authedUser
          ) ||
          this.props.questions[id].optionTwo.votes.includes(
            this.props.authedUser
          ),
        id: id,
      });
    }
  }

  render() {
    const { answered, id, is404page } = this.state;

    if (is404page) {
      return <Page404 />;
    }
    return !answered ? <AnswerQuestion id={id} /> : <PollResults id={id} />;
  }
}

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser: authedUser,
    questions: questions,
  };
};

export default connect(mapStateToProps)(DisplayPoll);
