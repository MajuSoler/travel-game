import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function QuizTimer() {
  const [gameTime, set_gameTime] = useState(0);
  const [startGame, set_startGame] = useState(false);
  const history = useHistory();

  function onClickStart() {
    set_gameTime(30);
    set_startGame(true);
    console.log("Clicked to start game");
  }

  useEffect(() => {
    if (gameTime > 0 && startGame) {
      setTimeout(() => {
        set_gameTime(gameTime - 1);
      }, 1000);
    }
    if (gameTime === 0 && startGame) {
      set_startGame(false);
      history.push("/end-quiz");
    }
  }, [gameTime, startGame, history]);

  return (
    <div className="quiz-timer">
      <p>{gameTime} seconds</p>
      <button onClick={onClickStart}>Start Game</button>
    </div>
  );
}
