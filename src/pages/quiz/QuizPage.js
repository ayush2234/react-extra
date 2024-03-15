import React, { useState } from "react";
import TimerPage from "./TImerPage";
import Quiz from "./Quiz";
import { shuffle } from "../../constant/questionBank";

export default function QuizPage() {
  const [isQuizEnd, setIsQuizEnd] = useState(false);
  const [isTimeUpOrStart, setisTimeUpOrStart] = useState({
    timerStart: false,
    timeUp: "",
  });
  const handleQuizEnd = (value, updateQuizState) => {
    console.log(value);
    setIsQuizEnd(value);  
  };

  const handleTimerRunning = (timerStart, timeUp) => {
    setTimeout(() => {
      setisTimeUpOrStart({ timerStart, timeUp });
    }, 1000);
  };
  return (
    <>
      <TimerPage quizEnd={isQuizEnd} onTimerRunning={handleTimerRunning} />
      <Quiz timeUpOrStart={isTimeUpOrStart} onQuizEnd={handleQuizEnd} />
    </>
  );
}
