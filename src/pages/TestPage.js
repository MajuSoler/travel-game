/* eslint-disable no-undef */
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchHighscores } from "../store/highscores/actions";
import { selectAllHighscores } from "../store/highscores/selectors";

import { fetchQuestions, newQuestion } from "../store/questions/actions";
import { selectAllQuestions } from "../store/questions/selectors";

export default function TestPage() {
  const dispatch = useDispatch();

  const allHighscores = useSelector(selectAllHighscores);
  console.log("allHighscores", allHighscores);

  const allQuestions = useSelector(selectAllQuestions);
  console.log("allQuestions", allQuestions);

  //   dispatch(newQuestion("a1", "a2", "a3", "a4", 3, "q", "img url"));

  useEffect(() => {
    dispatch(fetchHighscores());
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div>
      <h1>TestPage</h1>
    </div>
  );
}
