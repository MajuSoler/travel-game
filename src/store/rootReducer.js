import { combineReducers } from "redux";

import highscores from "./highscores/reducer";
import questions from "./questions/reducer";

export default combineReducers({
  highscores,
  questions,
});
