// import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import HighscoresPage from "./pages/HighscoresPage";
import QuizPage from "./pages/QuizPage";
import EndQuizPage from "./pages/EndQuizPage";
import AddQuestionPage from "./pages/AddQuestionPage";
import TestPage from "./pages/TestPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <Switch>
        <Route path="/highscores" component={HighscoresPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/end-quiz" component={EndQuizPage} />
        <Route path="/question" component={AddQuestionPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
