import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import { selectAllHighscores } from "../store/highscores/selectors";
// import { fetchHighscores } from "../store/highscores/actions";

import "../Css/HomePage.css";

export default function HomePage() {
  // const dispatch = useDispatch();
  // const highscore = useSelector(selectAllHighscores);
  // const [highscores, setHighScores] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchHighscores());
  // }, [dispatch]);
  // useEffect(() => {
  //   setHighScores(highscore);
  // }, [highscore]);

  return (
    <div id="image">
      <div id="top">
        <div id="sky"></div>
      </div>
      <div id="bottom">
        <div id="ground"></div>
      </div>
      <div id="text">
        <h1>World Quiz!</h1>
        <Link to="/quiz">
          <h2>Play Game!</h2>
        </Link>
        <Link to="/highscores">
          <h2>See High Scores!</h2>
        </Link>
        <div>
          <Link to="/question">
            <button className="invisibleButton"></button>
          </Link>
        </div>
      </div>
    </div>
  );
}
