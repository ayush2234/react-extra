import React, { useEffect, useState } from "react";
import "../../styles/quiz.css";
import { qBank } from "../../constant/questionBank";
import Question from "./Question";
import Score from "./Score";

export default function Quiz(props) {
  const { onQuizEnd, timerStart } = props;
  const [quiz, setQuiz] = useState({
    questionBank: qBank,
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    quizEnd: false,
  });

  const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
    quiz;

  const handleOptionChange = (event) => {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      selectedOption: event.target.value,
    }));
  };
  console.log("quiz====", quiz);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentQuestion].answer) {
      setQuiz((prevQuiz) => ({ ...prevQuiz, score: prevQuiz.score + 1 }));
    }
  };

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
        {!quizEnd && timerStart && (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            onSubmit={handleFormSubmit}
          />
        )}
        {quizEnd && <Score score={score} />}
      </div>
    </>
  );
}
