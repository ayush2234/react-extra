import React from "react";

export default function Option(props) {
  const { options, selectedOption, onOptionChange } = props;
  return (
    <>
      <div>
        {options?.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="option"
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
