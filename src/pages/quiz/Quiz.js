import React, { useEffect, useState } from "react";
import "../../styles/quiz.css";
import { qBank } from "../../constant/questionBank";
import { shuffle } from "../../constant/questionBank";
import Question from "./Question";
import Score from "../quiz/score/Score";

export default function Quiz(props) {
  const { onQuizEnd, timeUpOrStart } = props;
  const [quiz, setQuiz] = useState({
    questionBank: shuffle(),
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    quizEnd: false,
    wrongAnswer: 0,
    positiveResult: [],
    negativeResult: [],
  });

  const {
    questionBank,
    currentQuestion,
    selectedOption,
    score,
    quizEnd,
    wrongAnswer,
    positiveResult,
    negativeResult,
  } = quiz;

  const handleOptionChange = (event) => {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      selectedOption: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        positiveResult: [
          ...prevQuiz.positiveResult,
          { ...questionBank[currentQuestion], selectedOption },
        ],
        score: prevQuiz.score + 1,
      }));
    } else {
      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        negativeResult: [
          ...prevQuiz.negativeResult,
          { ...questionBank[currentQuestion], selectedOption },
        ],
        wrongAnswer: prevQuiz.wrongAnswer + 1,
      }));
    }
  };

  console.log("quiz====", quiz);

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        currentQuestion: prevQuiz.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      setQuiz((prevQuiz) => ({
        ...prevQuiz,
        quizEnd: true,
        currentQuestion: 0,
        selectedOption: "",
      }));
    }
  };

  useEffect(() => {
    onQuizEnd(quizEnd);
  }, [quizEnd]);

  return (
    <>
      <div className="quiz-container">
        {!quizEnd && timeUpOrStart.timerStart && (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            onSubmit={handleFormSubmit}
          />
        )}
        {(quizEnd || timeUpOrStart.timeUp.length > 0) && (
          <Score
            score={score}
            wrongAnswer={wrongAnswer}
            positiveResult={positiveResult}
            negativeResult={negativeResult}
          />
        )}
      </div>
    </>
  );
}
