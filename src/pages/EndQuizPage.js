import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../store/gameState/selectors";

export default function EndQuizPage() {
  const score = useSelector(selectScore);
  const [playerName, set_playerName] = useState("");
  return (
    <div className="thequiz-container">
      <h1>Game Over</h1>
      <h2>You have scored {score} points!</h2>
      <h3>Type your name to enter our hall of fame</h3>
      <input type="text" placeholder="Your name..." />
      <button>Submit</button>
    </div>
  );
}
