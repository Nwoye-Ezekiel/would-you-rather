import React, { Component } from "react";
import { connect } from "react-redux";

class Podium extends Component {
  render() {
    const {
      users,
      id,
      position,
      name,
      questionsAnswered,
      questionsCreated,
      score,
    } = this.props;
    return (
      <div>
        <div className="podium-container">
          <div className="podium-header-container">
            <h4>
              Rank: {position}{" "}
              <sup>{position === 1 ? "st" : position === 2 ? "nd" : "rd"}</sup>
            </h4>
            <div className="trophy-container">
              <img
                src={require(`./assets/trophies/${position}.svg`).default}
                alt="avatar"
              />
            </div>
          </div>
          <div className="podium-body-container">
            <div className="podium-avatar-container">
              <img
                src={require(`${users[id].avatarURL}`).default}
                alt="avatar"
              />
            </div>
            <div className="podium-content-container">
              <div className="podium-content-header">
                <h3>{name}</h3>
              </div>
              <p>Answered Questions: {questionsAnswered}</p>
              <hr />
              <p>Created Questions: {questionsCreated} </p>
              <hr />
              <p>Score: {score} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  { users },
  { key, position, name, questionsAnswered, questionsCreated, score }
) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Podium);