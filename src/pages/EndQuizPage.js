import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectScore } from "../store/gameState/selectors";
import { newHighscore } from "../store/highscores/actions";
import { setScore } from "../store/gameState/actions";

export default function EndQuizPage() {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const [player_name, set_player_name] = useState("");

  function nameChangeHandler(event) {
    set_player_name(event.target.value);
  }

  function submitScore() {
    dispatch(newHighscore(player_name, score));
    set_player_name("");
    dispatch(setScore(0));
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
        value={player_name}
        onChange={(event) => nameChangeHandler(event)}
      />
      <button onClick={submitScore}>Submit</button>
    </div>
  );
}
