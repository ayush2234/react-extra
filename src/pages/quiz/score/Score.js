import React, { useState } from "react";
import PositiveResult from "./PositiveResult";
import NegativeResult from "./NegativeResult";
import Result from "./Result";

export default function Score(props) {
  const [result, setResult] = useState();
  const { score, wrongAnswer, positiveResult, negativeResult, onNextQuestion } =
    props;

  const handleResult = (value) => {
    if (value.includes("positive")) {
      setResult(true);
    } else {
      setResult(false);
    }
  };
  console.log(result);
  return (
    <div>
      <h2>Results</h2>
      <h4>Your score: {score}</h4>

      <h4>rightAnswer: {score}</h4>
      <h4>wrongAnswer: {wrongAnswer}</h4>

      {wrongAnswer === 0 && score === 0 ? (
        "The result will not be displayed as no questions were addressed."
      ) : (
        <div>
          <button onClick={() => handleResult("positive")}>
            Positive Result
          </button>
          <button onClick={() => handleResult("negative")}>
            Negative Result
          </button>
        </div>
      )}

      {result && <Result results={positiveResult}  />}
      {!result && result !== undefined && (
        <Result results={negativeResult} wrongAnswer={wrongAnswer} />
      )}
    </div>
  );
}
