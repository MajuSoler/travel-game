import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { newQuestion } from "../store/questions/actions";

export default function AddQuestionPage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [question, setQuestion] = useState(false);
  const [textOptionA, setTextOptionA] = useState("");
  const [textOptionB, setTextOptionB] = useState("");
  const [textOptionC, setTextOptionC] = useState("");
  const [textOptionD, setTextOptionD] = useState("");
  const [state, setState] = useState(true);

  const [optionA, setOptionA] = useState(false);
  const [optionB, setOptionB] = useState(false);
  const [optionC, setOptionC] = useState(false);
  const [optionD, setOptionD] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    if (optionA === true) {
      setCorrectAnswer(1);
    } else if (optionB === true) {
      setCorrectAnswer(2);
    } else if (optionC === true) {
      setCorrectAnswer(3);
    } else if (optionD === true) {
      setCorrectAnswer(4);
    }
  }, [optionA, optionB, optionC, optionD]);

  function inputNewQuestion() {
    dispatch(
      newQuestion(
        textOptionA,
        textOptionB,
        textOptionC,
        textOptionD,
        correctAnswer,
        question,
        image
      )
    );
    setState(false);
  }

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {state ? (
        <div className="App">
          <div>
            <input
              className="inputFields"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Put the URL of the image"
            />
          </div>
          <div>
            <input
              className="inputFields"
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Put the question here"
            />
          </div>
          <div>
            <input
              className="inputFields"
              type="text"
              onChange={(e) => setTextOptionA(e.target.value)}
              placeholder="Put option A here"
            />
            <input
              type="checkbox"
              onChange={(e) => setOptionA(e.target.checked)}
            />
          </div>
          <div>
            <input
              className="inputFields"
              type="text"
              onChange={(e) => setTextOptionB(e.target.value)}
              placeholder="Put option B here"
            />
            <input
              type="checkbox"
              onChange={(e) => setOptionB(e.target.checked)}
            />
          </div>
          <div>
            <input
              className="inputFields"
              type="text"
              onChange={(e) => setTextOptionC(e.target.value)}
              placeholder="Put option C here"
            />
            <input
              type="checkbox"
              onChange={(e) => setOptionC(e.target.checked)}
            />
          </div>
          <div>
            <input
              className="inputFields"
              type="text"
              onChange={(e) => setTextOptionD(e.target.value)}
              placeholder="Put option D here"
            />
            <input
              type="checkbox"
              onChange={(e) => setOptionD(e.target.checked)}
            />
          </div>
          <div>
            <button onClick={() => inputNewQuestion()}>
              Send New Question
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Your questin was sucessfully added!</p>
          <button onClick={refreshPage}> Add another question!</button>
        </div>
      )}
    </div>
  );
}
