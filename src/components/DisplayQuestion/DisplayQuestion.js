import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";
import PollResults from "../PollComponents/PollResults/PollResults";
import { formatDate } from "../../Helpers/helpers";

const QuestionComponent = ({
  questions,
  users,
  id,
  answerQuestion,
  pollResults,
}) => {
  return (
    <div className="question-container">
      <div className="question-header-container">
        <h4>
          {users[questions[id].author].name} {pollResults ? "asked" : "asks:"}
          <p className="date">{formatDate(questions[id].timestamp)}</p>
        </h4>
      </div>
      <div className="question-body-container">
        <div className="question-avatar-container">
          <img
            src={require(`${users[questions[id].author].avatarURL}`).default}
            alt="avatar"
          />
        </div>
        <div className="question-content-container">
          <div className="question-content-header">
            {!pollResults && <h3>Would you rather</h3>}
            {!answerQuestion && !pollResults && (
              <div>
                <p className="question-content-text">
                  {questions[id].optionOne.text} or ...
                </p>
                <Link to={`/questions/${id}`}>
                  <button className="view-poll-button">view poll</button>
                </Link>
              </div>
            )}
            {answerQuestion && <AnswerQuestion id={id} />}
            {pollResults && <PollResults id={id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

class DisplayQuestion extends Component {
  render() {
    const { questions, users, id, answerQuestion, pollResults } = this.props;
    return answerQuestion || pollResults ? (
      <div className="module">
        <div className="module-wrapper">
          <h3 className="module-title">
            {answerQuestion && "Answer Question"}{" "}
            {pollResults && "Poll Results"}
          </h3>
          <QuestionComponent
            questions={questions}
            users={users}
            id={id}
            answerQuestion={answerQuestion}
            pollResults={pollResults}
          />
        </div>
      </div>
    ) : (
      <QuestionComponent
        questions={questions}
        users={users}
        id={id}
        answerQuestion={answerQuestion}
        pollResults={pollResults}
      />
    );
  }
}

const mapStateToProps = (
  { questions, users },
  { id, answerQuestion, pollResults }
) => {
  return {
    questions,
    users,
    id,
    answerQuestion,
    pollResults,
  };
};

export default connect(mapStateToProps)(DisplayQuestion);