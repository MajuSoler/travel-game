import { combineReducers } from "redux";

import highscores from "./highscores/reducer";
import questions from "./questions/reducer";
import gameState from "./gameState/reducer";

export default combineReducers({
  highscores,
  questions,
  gameState,
});
