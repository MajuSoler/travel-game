import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../store/gameState/selectors";

export default function QuizScore() {
  const score = useSelector(selectScore);

  return (
    <div className="quiz-score">
      <h2>Score: {score}</h2>
    </div>
  );
}
