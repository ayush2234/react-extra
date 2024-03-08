import React from "react";

export default function Score(props) {
  const { score, onNextQuestion } = props;

  return (
    <div>
      <h2>Results</h2>
      <h4>Your score: {score}</h4>
    </div>
  );
}
