import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../Redux/actions/questions";
import { Redirect } from "react-router-dom";

class Add extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  // sets the component state value for option one
  handleoptionOneText = (event) => {
    this.setState({ optionOneText: event.target.value });
  };

  // sets the component state value for option two
  handleoptionTwoText = (event) => {
    this.setState({ optionTwoText: event.target.value });
  };

  // calls dispatch to save the question and redirects to the home page
  handleSubmit = () => {
    this.setState({ toHome: true }, () => {
      this.props.dispatch(
        handleAddQuestion({
          optionOneText: this.state.optionOneText,
          optionTwoText: this.state.optionTwoText,
          author: this.props.authedUser,
        })
      );
    });
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    // redirects to the home page when toHome is true after question submission
    if (toHome) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="new-question-wrapper">
        <div className="new-question-container">
          <h2 className="new-question-title">Create a Question</h2>
          <hr />
          <div>
            <h2 className="new-question-header">Would you rather...</h2>
            <input
              value={optionOneText}
              placeholder="Enter option one here"
              onChange={this.handleoptionOneText}
              className="new-question-input"
              maxLength="50"
            ></input>
            <p className="or">Or</p>
            <input
              value={optionTwoText}
              placeholder="Enter option two here"
              onChange={this.handleoptionTwoText}
              className="new-question-input"
              maxLength="50"
            ></input>
            <button
              className="new-question-button"
              onClick={this.handleSubmit}
              disabled={!(optionOneText && optionTwoText)}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// retrieve authedUser from the redux state and questions from the component props
const mapStateToProps = ({ authedUser }, { questions }) => {
  return {
    authedUser,
    questions,
  };
};

export default connect(mapStateToProps)(Add);
