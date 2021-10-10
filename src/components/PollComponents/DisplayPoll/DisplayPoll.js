import React, { Component } from "react";
import { connect } from "react-redux";
// import AnswerQuestion from "../../AnswerQuestion/AnswerQuestion";
import Page404 from "../../Page404/Page404";
import DisplayQuestion from "../../DisplayQuestion/DisplayQuestion";

class DisplayPoll extends Component {
  state = {
    answered: false,
    id: null,
    is404page: false,
  };

  // retrieve question id from the address bar and verify it's valid.
  // sets the state is404page to true if the question id is not valid, which renders the 404 page.
  // checks if the authedUser has answered that particular question so as to render the correct component.
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
    const { answered, id, is404page} = this.state;

    // displays 404 page due to invalid question id
    if (is404page) {
      return <Page404 />;
    }

    // passes the retrieved question id to the correct component if the user has answered the question or not.
    return !answered ? <DisplayQuestion id={id} answerQuestion={true}/> : <DisplayQuestion id={id} pollResults={true}/>;
    // return !answered ? <AnswerQuestion id={id} /> : <PollResults id={id} />;
  }
}

// retrieves the authedUser and questions data from the redux state.
const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser,
    questions,
  };
};

export default connect(mapStateToProps)(DisplayPoll);
