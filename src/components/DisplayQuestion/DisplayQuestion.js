import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DisplayQuestion extends Component {
  render() {
    return (
      <div className="question-container">
        <div className="header-container">
          <h4>Author:</h4>
          <p>
            {
              this.props.users[this.props.questions[this.props.question].author]
                .name
            }
          </p>
          <img
            src={
              require(`${
                this.props.users[
                  this.props.questions[this.props.question].author
                ].avatarURL
              }`).default
            }
            alt=""
          />
        </div>
        <h3>Would you rather</h3>
        <p>{this.props.questions[this.props.question].optionOne.text} or ...</p>
        <Link to={`/questions/${this.props.question}`}>
          <button>view poll</button>
        </Link>
      </div>
    );
  }
}

// retrieve questions and users data from the redux state and question from the component props
const mapStateToProps = ({ questions, users }, { question }) => {
  return {
    questions,
    users,
    question,
  };
};

export default connect(mapStateToProps)(DisplayQuestion);
