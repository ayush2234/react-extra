import React, { useState, useCallback } from "react";
import WeatherPage from "./WeatherPage";

const ExtraPage = (props) => {
  const [count, setCount] = useState(0);

  // Without useCallback
  const handleInputChange = () => {
    console.log("calleddddd=====");
    setCount(count + 1);
  };

  // With useCallback
  const handleClick = useCallback(() => {
    console.log("called");
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div className="extra-container">
        <input type="file" />
        <input onChange={handleClick} />
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
      <WeatherPage count={count} />
    </>
  );
};

export default ExtraPage;
