import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllHighscores } from "../store/highscores/selectors";
import { fetchHighscores } from "../store/highscores/actions";
import "../Css/HighScorePage.css";

export default function HighscoresPage() {
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
    <div id="image">
      <div id="sky"></div>

      <div id="text">
        <Link to="/">
          <h2 className="Title">World Quiz!</h2>
        </Link>
        <div className="scrolling">
          {highscores.map((score, index) => (
            <ul key={index}>
              <h1 className="high-scores">
                {score.player_name} - {score.score}
              </h1>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
