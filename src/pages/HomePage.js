import React from "react";
import { Link } from "react-router-dom";
import "../Css/HomePage.css";
import "../App.css";

export default function HomePage() {
  return (
    <div className="App">
      <div>
        <h1>World Quiz!</h1>
      </div>
      <div>
        <h1>Top 5 Players!</h1>
      </div>
      <div>
        <button>Show all Scores!!</button>
      </div>
      <div>
        <Link to="/highscores">
          <button className="invisibleButton"></button>
        </Link>
      </div>
    </div>
  );
}
