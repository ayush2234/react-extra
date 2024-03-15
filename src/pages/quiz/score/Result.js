import React from "react";
import ResultOption from "./ResultOption";
import NegativeResult from "./NegativeResult";
import "../../../styles/resultPage.css";

export default function Result(props) {
  const { results, wrongAnswer } = props;
  console.log("wrong=========", wrongAnswer);
  return (
    <>
      <div className="result-main-container">
        <div className="result-container">
          {results.length === 0
            ? "There are no results available to display."
            : results.map((result) => {
                const { id, question, answer, selectedOption } = result;
                console.log(selectedOption);
                return (
                  <div key={id}>
                    <div>
                      <h4>Question no {id}</h4>
                      <h5>{question}</h5>
                      <ResultOption
                        options={result.options}
                        selectedOption={selectedOption}
                        id={id}
                      />
                    </div>
                    {wrongAnswer > 0 && <div>rigth answer is: {answer}</div>}
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}
