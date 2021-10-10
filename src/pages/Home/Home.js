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
      <div className="module">
        <div className="module-wrapper">
          <h3 className="module-title">All Questions</h3>
          <div className="questions-header">
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

          <div>
            {this.state.index === 0 &&
              (this.state.unansweredQuestions.length === 0 ? (
                <img className="no-data-image" src={NoData} alt="avatar" />
              ) : (
                this.state.unansweredQuestions.map((id) => {
                  return <DisplayQuestion key={id} id={id} />;
                })
              ))}

            {this.state.index === 1 &&
              (this.state.answeredQuestions.length === 0 ? (
                <img className="no-data-image" src={NoData} alt="avatar" />
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

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questions: questions,
    authedUser: authedUser,
  };
};

export default connect(mapStateToProps)(Home);
