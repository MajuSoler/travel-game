import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../store/gameState/actions";
import { selectScore } from "../store/gameState/selectors";

export default function TheQuiz({ data }) {
  const [questionTurn, set_questionTurn] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const score = useSelector(selectScore);

  function onClickAnswer(answerId) {
    if (answerId === data[questionTurn].correct_answer) {
      dispatch(setScore(score + 10));
    } else {
      dispatch(setScore(score - 5));
    }
    if (questionTurn === data.length - 1) {
      history.push("/end-quiz");
    } else {
      set_questionTurn(questionTurn + 1);
    }
  }

  return (
    <div className="thequiz-container">
      <div>
        <img src={data[questionTurn].img_url} alt="quiz" className="quiz-img" />
      </div>
      <div className="quiz-question">{data[questionTurn].question}</div>
      <div>
        <ul className="quiz-answers">
          <li onClick={() => onClickAnswer(1)}>
            {data[questionTurn].answer_1}
          </li>
          <li onClick={() => onClickAnswer(2)}>
            {data[questionTurn].answer_2}
          </li>
          <li onClick={() => onClickAnswer(3)}>
            {data[questionTurn].answer_3}
          </li>
          <li onClick={() => onClickAnswer(4)}>
            {data[questionTurn].answer_4}
          </li>
        </ul>
      </div>
    </div>
  );
}
