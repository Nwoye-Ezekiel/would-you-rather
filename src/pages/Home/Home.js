import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayQuestion from "../../components/DisplayQuestion/DisplayQuestion";
import Layout from "../../components/Layout/Layout";

class Home extends Component {
  state = {
    answeredQuestions: [],
    unansweredQuestions: [],
    index: 0,
  };
  componentWillMount() {
    console.log("Authed User-------: ", this.props.authedUser);
    console.log("new questions-------: ", this.props.questions);

    this.setState(
      {
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
      },
      () => {
        console.log("Answered questions: ", this.state.answeredQuestions);
      }
    );

    this.setState(
      {
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
      },
      () => {
        console.log("Unanswered questions: ", this.state.unansweredQuestions);
      }
    );
  }

  handleUnansweredQuestions = () => {
    this.setState({ index: 0 });
  };
  handleAnsweredQuestions = () => {
    this.setState({ index: 1 });
  };
  render() {
    return (
      <Layout>
        <div>
          <h3>Questions</h3>
          <h4 onClick={this.handleUnansweredQuestions}>Unanswered Questions</h4>
          <h4 onClick={this.handleAnsweredQuestions}>Answered Questions</h4>
          {this.state.index === 0 &&
            this.state.unansweredQuestions.map((question) => {
              return <DisplayQuestion question={question} />;
            })}
          {this.state.index === 1 &&
            this.state.answeredQuestions.map((question) => {
              return <DisplayQuestion question={question} />;
            })}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questions: questions,
    authedUser: authedUser,
  };
};

export default connect(mapStateToProps)(Home);
