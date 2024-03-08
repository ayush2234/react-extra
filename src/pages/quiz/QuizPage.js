import React, { useState } from "react";
import TimerPage from "./TImerPage";
import Quiz from "./Quiz";

export default function QuizPage() {
  const [isQuizEnd, setIsQuizEnd] = useState(false);
  const [isTimeStart, setisTimeStart] = useState(false);
  const handleQuizEnd = (value) => {
    console.log(value);
    setIsQuizEnd(value);
  };

  const handleTImerRunning = (value) => {
    setTimeout(() => {
      setisTimeStart(value);
    }, 1000);
  };
  return (
    <>
      <TimerPage quizEnd={isQuizEnd} onTimerRunning={handleTImerRunning} />
      <Quiz timerStart={isTimeStart} onQuizEnd={handleQuizEnd} />
    </>
  );
}
