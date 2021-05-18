import React from "react";

export default function TheQuiz(props) {
  return (
    <div className="thequiz-container">
      <div>
        <img
          src="https://source.unsplash.com/1600x900/?"
          alt="quiz"
          className="quiz-img"
        />
      </div>
      <div className="quiz-question">This is very difficult question?</div>
      <div>
        <ul className="quiz-answers">
          <li onClick={() => props.clickHandler("1")}>Answer 1</li>
          <li onClick={() => props.clickHandler("2")}>Answer 2</li>
          <li onClick={() => props.clickHandler("3")}>Answer 3</li>
          <li onClick={() => props.clickHandler("4")}>Answer 4</li>
        </ul>
      </div>
    </div>
  );
}
