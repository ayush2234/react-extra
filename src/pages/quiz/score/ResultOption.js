import React from "react";
import Option from "../Option";

export default function ResultOption(props) {
  const { options, selectedOption, id } = props;

  const onOptionChange = () => {
    console.log("called========", options, selectedOption);
  };
  return (
    <>
      <Option
        options={options}
        selectedOption={selectedOption}
        onOptionChange={onOptionChange}
        id={id}
      />
    </>
  );
}
