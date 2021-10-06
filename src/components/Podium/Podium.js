import React from "react";

function Podium(props) {
  return (
    <div>
      {props.position}: {props.name}
      <p>Answered Questions:{props.questionsAnswered}</p>
      <p>Created Questions: {props.questionsCreated} </p>
      <p>Score: {props.score} </p>
      <br />
    </div>
  );
}

export default Podium;
