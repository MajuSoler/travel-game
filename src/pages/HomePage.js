import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAllHighscores } from "../store/highscores/selectors";
import { fetchHighscores } from "../store/highscores/actions";

import SoundPlayer from "../components/SoundPlayer";

import "../Css/HomePage.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const highscore = useSelector(selectAllHighscores);
  const [highscores, setHighScores] = useState([]);

  useEffect(() => {
    SoundPlayer("HOMEPAGE");
  }, []);

  useEffect(() => {
    dispatch(fetchHighscores());
  }, [dispatch]);
  useEffect(() => {
    setHighScores(highscore);
  }, [highscore]);

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
    // <div>
    //   <div id="image">
    //     <div id="top">
    //       <div id="sky">
    //         <div>
    //           <h1>World Quiz!</h1>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="bottom">
    //       <div id="ground"></div>
    //     </div>
    //     <div id="text">
    //       <h1>World Quiz!</h1>
    //       <h1>Top 5 Players!</h1>
    //     </div>
    //   </div>
    //   <div className="App">
    //     <div>
    //       <h1>World Quiz!</h1>
    //     </div>
    //     <Link to="/"></Link>
    //     <Link to="/highscores">
    //       <div>
    //         <button>Show all Scores!!</button>
    //       </div>
    //     </Link>
    //     <div>
    //       {highscores.slice(0, 5).map((score, index) => (
    //         <ul key={index}>
    //           <p>
    //             {score.player_name} - {score.score}
    //           </p>
    //         </ul>
    //       ))}
    //     </div>
    //     <div>
    //       <Link to="/quiz">
    //         <div>
    //           <button>Play Game!</button>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>

    //   <div>
    //     <Link to="/question">
    //       <button className="invisibleButton"></button>
    //     </Link>
    //   </div>
    // </div>
  );
}
