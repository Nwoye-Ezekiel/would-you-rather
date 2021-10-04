import { Component } from "react";
import { connect } from "react-redux";

class DisplayQuestion extends Component {
  state = {
    temp: [],
  };
  componentDidMount() {
    console.log("Questions: ", this.props.questions);
  }
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
        <button>view poll</button>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users }, question) => {
  return {
    questions: questions,
    users: users,
  };
};

export default connect(mapStateToProps)(DisplayQuestion);
