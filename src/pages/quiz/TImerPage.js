import React, { useState, useEffect } from "react";
import "../../styles/timerPage.css";

export default function TimerPage(props) {
  const { quizEnd, onTimerRunning } = props;
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeup, setTimeUp] = useState("");

  const handleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  useEffect(() => {
    let timerInterval;
    onTimerRunning(isTimerRunning);
    const timer = () => {
      if (!quizEnd) {
        if (time.seconds < 30) {
          //&& time.hours < 1
          setTime((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds + 1,
          }));
        }
        // } else if (time.minutes < 59 && time.seconds >= 59) {
        //   setTime((prevTime) => ({
        //     ...prevTime,
        //     minutes: prevTime.minutes + 1,
        //     seconds: 0,
        //   }));
        // } else if (time.hours < 1 && time.minutes >= 59) {
        //   setTime((prevTime) => ({
        //     ...prevTime,
        //     hours: prevTime.hours + 1,
        //     seconds: 0,
        //     minutes: 0,
        //   }));
        // }
        else {
          setIsTimerRunning(!isTimerRunning);
          clearInterval(timerInterval);
          setTimeUp("Your time is up");
        }
      } else {
        setIsTimerRunning(!isTimerRunning);
        clearInterval(timerInterval);
      }
    };

    if (isTimerRunning) {
      timerInterval = setInterval(timer, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning, time.seconds, time.minutes]);

  console.log(isTimerRunning);

  return (
    <>
      <div className="timer-container">
        <p>
          {time.hours < 10 ? `0${time.hours}` : time.hours}:
          {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
          {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
        </p>
        <button
          className={`${
            quizEnd || timeup.length > 0 ? "timer-inactive" : "timer-active"
          }`}
          onClick={handleTimer}
          disabled={quizEnd || timeup.length > 0 ? true : false}
        >
          Start Timer
        </button>
        {timeup}
      </div>
    </>
  );
}
