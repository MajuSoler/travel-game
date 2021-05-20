import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScore } from "../store/gameState/actions";
import "../Css/QuizPage.css";


export default function QuizTimer() {
  const [gameTime, set_gameTime] = useState(0);
  const [startGame, set_startGame] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function onClickStart() {
    set_gameTime(30);
    set_startGame(true);
    dispatch(setScore(0));
    console.log("Game started!");
  }

  useEffect(() => {
    onClickStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <h1>{gameTime} seconds</h1>
    </div>
  );
}
