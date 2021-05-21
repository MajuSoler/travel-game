/* eslint-disable no-undef */
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchHighscores /*, newHighscore*/,
} from "../store/highscores/actions";
import { selectAllHighscores } from "../store/highscores/selectors";

import { fetchQuestions /*, newQuestion*/ } from "../store/questions/actions";
import { selectAllQuestions } from "../store/questions/selectors";

import { setScore } from "../store/gameState/actions";
import { selectScore } from "../store/gameState/selectors";

export default function TestPage() {
  const dispatch = useDispatch();

  const allHighscores = useSelector(selectAllHighscores);
  console.log("allHighscores", allHighscores);

  const allQuestions = useSelector(selectAllQuestions);
  console.log("allQuestions", allQuestions);

  //   dispatch(newQuestion("a1", "a2", "a3", "a4", 3, "q", "img url"));
  //   dispatch(newHighscore("KLM", 500));

  useEffect(() => {
    dispatch(fetchHighscores());
    dispatch(fetchQuestions());
  }, [dispatch]);

  let score = useSelector(selectScore);

  console.log("using selectScore for the 1st time. score = ", score);

  dispatch(setScore(50));

  score = useSelector(selectScore);

  console.log("using selectScore for the 2nd time. score = ", score);

  return (
    <div>
      <h1>TestPage</h1>
    </div>
  );
}
