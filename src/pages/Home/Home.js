import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayQuestion from "../../components/DisplayQuestion/DisplayQuestion";

class Home extends Component {
  state = {
    answeredQuestions: [],
    unansweredQuestions: [],
    index: 0,
  };

  // the questions from the redux state is sorted and filtered by answered and unanswered based on the authedUser
  componentDidMount() {
    this.setState({
      answeredQuestions: Object.keys(this.props.questions)
        .filter((question) => {
          return (
            this.props.questions[question].optionOne.votes.includes(
              this.props.authedUser
            ) ||
            this.props.questions[question].optionTwo.votes.includes(
              this.props.authedUser
            )
          );
        })
        .sort(
          (a, b) =>
            this.props.questions[b].timestamp -
            this.props.questions[a].timestamp
        ),
    });

    this.setState({
      unansweredQuestions: Object.keys(this.props.questions)
        .filter((question) => {
          return (
            !this.props.questions[question].optionOne.votes.includes(
              this.props.authedUser
            ) &&
            !this.props.questions[question].optionTwo.votes.includes(
              this.props.authedUser
            )
          );
        })
        .sort(
          (a, b) =>
            this.props.questions[b].timestamp -
            this.props.questions[a].timestamp
        ),
    });
  }

  // setting the component state to view the unanswered questions
  handleUnansweredQuestions = () => {
    this.setState({ index: 0 });
  };

  // setting the component state to view the answered questions
  handleAnsweredQuestions = () => {
    this.setState({ index: 1 });
  };

  render() {
    return (
      <div>
        <h3>Questions</h3>
        <h4 onClick={this.handleUnansweredQuestions}>Unanswered Questions</h4>
        <h4 onClick={this.handleAnsweredQuestions}>Answered Questions</h4>
        {this.state.index === 0 &&
          this.state.unansweredQuestions.map((question) => {
            return <DisplayQuestion key={question} question={question} />;
          })}
        {this.state.index === 1 &&
          this.state.answeredQuestions.map((question) => {
            return <DisplayQuestion key={question} question={question} />;
          })}
      </div>
    );
  }
}

// retrieve questions and authedUser data from the redux state
const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questions: questions,
    authedUser: authedUser,
  };
};

export default connect(mapStateToProps)(Home);
