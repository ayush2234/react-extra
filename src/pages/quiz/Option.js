import React from "react";

export default function Option(props) {
  const { options, selectedOption, onOptionChange, id } = props;
  console.log("=============", selectedOption, options);
  return (
    <>
      <div>
        {options?.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={`option_${id}`}
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </>
  );
}
