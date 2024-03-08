import React from "react";
import Option from "./Option";

export default function Question(props) {
  const { question, selectedOption, onOptionChange, onSubmit } = props;
  return (
    <>
      <div className="question-conatiner">
        <h2>Quiz Question</h2>
        <h4>Question no {question.id}</h4>
        <h5 className="mt-2">{question.question}</h5>
        <Option
          options={question.options}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
}
