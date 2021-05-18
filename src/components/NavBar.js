// import "./NavBar.scss";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/" activeStyle={{ fontWeight: "bold" }} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/highscores" activeStyle={{ fontWeight: "bold" }}>
        Highscores
      </NavLink>
      {" | "}
      <NavLink to="/quiz" activeStyle={{ fontWeight: "bold" }}>
        Quiz
      </NavLink>
      {" | "}
      <NavLink to="/end-quiz" activeStyle={{ fontWeight: "bold" }}>
        End Quiz
      </NavLink>
      {" | "}
      <NavLink to="/question" activeStyle={{ fontWeight: "bold" }}>
        Add Question
      </NavLink>
      {" | "}
      <NavLink to="/test" activeStyle={{ fontWeight: "bold" }}>
        Test Page
      </NavLink>
    </div>
  );
}
