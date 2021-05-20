import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../store/gameState/selectors";
import "../Css/QuizPage.css";
export default function QuizScore() {
  const score = useSelector(selectScore);

  return (
    <div className="quiz-score">
      <h1>Score: {score}</h1>
    </div>
  );
}
