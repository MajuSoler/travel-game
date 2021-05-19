import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAllHighscores } from "../store/highscores/selectors";
import { fetchHighscores } from "../store/highscores/actions";

import "../Css/HomePage.css";
import "../App.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const highscore = useSelector(selectAllHighscores);
  const [highscores, setHighScores] = useState([]);
  useEffect(() => {
    dispatch(fetchHighscores());
  }, [dispatch]);
  useEffect(() => {
    setHighScores(highscore);
  }, [highscore]);

  return (
    <div>
      <div className="App">
        <div>
          <h1>World Quiz!</h1>
        </div>
        <div>
          <h1>Top 5 Players!</h1>
        </div>
        <Link to="/highscores">
          <div>
            <button>Show all Scores!!</button>
          </div>
        </Link>
        <div>
          {highscores.slice(0, 5).map((score, index) => (
            <ul key={index}>
              <li>
                {score.player_name} - {score.score}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <Link to="/question">
          <button className="invisibleButton"></button>
        </Link>
      </div>
    </div>
  );
}
