import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../store/gameState/selectors";

export default function EndQuizPage() {
  const score = useSelector(selectScore);
  const [playerName, set_playerName] = useState("");

  function nameChangeHandler(event) {
    set_playerName(event.target.value);
  }

  return (
    <div className="thequiz-container">
      <h1>Game Over</h1>
      <h2>You have scored {score} points!</h2>
      <h3>Type your name to enter our hall of fame</h3>
      <input
        className="quiz-playerInput"
        type="text"
        placeholder="Your name..."
        value={playerName}
        onChange={(event) => nameChangeHandler(event)}
      />
      <button>Submit</button>
    </div>
  );
}
