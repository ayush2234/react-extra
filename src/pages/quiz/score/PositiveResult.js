import React from "react";
import Result from "./Result";

export default function PositiveResult(props) {
  const { score, positiveResult } = props;
  return (
    <>
      <Result {...props} />
    </>
  );
}
