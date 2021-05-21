import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import SoundPlayer from "../components/SoundPlayer";

import "../Css/HomePage.css";

export default function HomePage() {
  useEffect(() => {
    SoundPlayer("HOMEPAGE");
  }, []);

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
