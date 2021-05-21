import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { newQuestion } from "../store/questions/actions";

import "../Css/AddQuestionPage.css";

export default function AddQuestionPage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [question, setQuestion] = useState(false);
  const [textOptionA, setTextOptionA] = useState("");
  const [textOptionB, setTextOptionB] = useState("");
  const [textOptionC, setTextOptionC] = useState("");
  const [textOptionD, setTextOptionD] = useState("");
  const [state, setState] = useState(true);

  const [correctAnswer, setCorrectAnswer] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      image !== "" &&
      question !== "" &&
      textOptionA !== "" &&
      textOptionB !== "" &&
      textOptionC !== "" &&
      textOptionD !== "" &&
      correctAnswer !== ""
    ) {
      setShow(true);
    }
  }, [
    image,
    question,
    textOptionA,
    textOptionB,
    textOptionC,
    textOptionD,
    correctAnswer,
  ]);

  console.log(correctAnswer);
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
    <div className="QuestionPage">
      <div className="containerForFutureImage">
        {image ? (
          <div className="prviewImage">
            <img src={image} alt="quiz" className="quiz-img" />
          </div>
        ) : (
          <div className="contentBox"> </div>
        )}
      </div>
      {state ? (
        <div className="testin">
          <div>
            <div>
              <input
                className="inputFields"
                type="text"
                onChange={(e) => setImage(e.target.value)}
                placeholder="URL"
              />
            </div>
            <div>
              <input
                className="inputFields"
                type="text"
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Question"
              />
            </div>
            <div>
              <input
                className="inputFields"
                type="text"
                onChange={(e) => setTextOptionA(e.target.value)}
                placeholder="Option A"
              />
            </div>

            <div>
              <input
                className="inputFields"
                type="text"
                onChange={(e) => setTextOptionB(e.target.value)}
                placeholder="Option B"
              />
            </div>
            <div>
              <input
                className="inputFields"
                type="text"
                onChange={(e) => setTextOptionC(e.target.value)}
                placeholder="Option C"
              />
            </div>
            <div>
              <input
                className="inputFields"
                type="text"
                onChange={(e) => setTextOptionD(e.target.value)}
                placeholder="Option D"
              />
            </div>
          </div>
          <div
            type="radio"
            name="answer"
            className="radioselector"
            onChange={(event) => setCorrectAnswer(event.target.value)}
          >
            <div className="testing">
              <label>Correct answer: </label>
            </div>
            <div className="testing">
              <input type="radio" value="1" name="answer"></input>
              <label className="option">Option A</label>
            </div>
            <div className="testing">
              <input type="radio" value="2" name="answer"></input>
              <label className="option">Option B</label>{" "}
            </div>
            <div className="testing">
              <input type="radio" value="3" name="answer"></input>
              <label className="option">Option C</label>{" "}
            </div>
            <div className="testing">
              <input type="radio" value="4" name="answer"></input>
              <label className="option">Option D</label>{" "}
            </div>
          </div>

          {show ? (
            <div>
              <button
                className="New-question-Button"
                onClick={() => inputNewQuestion()}
              >
                Send New Question
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>
          <p className="sucess-message">Your questin was sucessfully added!</p>
          <button className="New-question-Button" onClick={refreshPage}>
            Add another question!
          </button>
          <Link to="/">
            <button className="New-question-Button">Go back to Home!</button>
          </Link>
        </div>
      )}
    </div>
  );
}
