import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayQuestion from "../../components/DisplayQuestion/DisplayQuestion";
import NoData from "./assets/no-data-image/no-data.png";

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

  tabStyle = {
    color: "#F4FCFD",
    background: "#01C6D7",
  };

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
      <div class="home">
        <div class="questions-wrapper">
          <h3 class="questions-title">All Questions</h3>
          <div class="questions-header">
            <h4
              style={this.state.index === 0 ? this.tabStyle : {}}
              onClick={this.handleUnansweredQuestions}
            >
              Unanswered
            </h4>
            <h4
              style={this.state.index === 1 ? this.tabStyle : {}}
              onClick={this.handleAnsweredQuestions}
            >
              Answered{" "}
            </h4>
          </div>

          <div class="questions-container">
            {console.log("length: ", this.state.unansweredQuestions.length)}
            {this.state.index === 0 &&
              (this.state.unansweredQuestions.length === 0 ? (
                <img className="no-data-image" src={NoData} alt="" />
              ) : (
                this.state.unansweredQuestions.map((id) => {
                  return <DisplayQuestion key={id} id={id} />;
                })
              ))}

            {this.state.index === 1 &&
              (this.state.answeredQuestions.length === 0 ? (
                <img className="no-data-image" src={NoData} alt="" />
              ) : (
                this.state.answeredQuestions.map((id) => {
                  return <DisplayQuestion key={id} id={id} />;
                })
              ))}
          </div>
        </div>
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
