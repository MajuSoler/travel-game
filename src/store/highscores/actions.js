import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_HIGHSCORES_SUCCESS = "FETCH_HIGHSCORES_SUCCESS";

export const fetchHighscoresSuccess = (highscores) => ({
  type: FETCH_HIGHSCORES_SUCCESS,
  payload: highscores,
});

export const fetchHighscores = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/highscore`);

      console.log("response.data", response.data);
      dispatch(fetchHighscoresSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const newHighscore = (player_name, score) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/highscore`, {
        player_name,
        score,
      });

      console.log("response.data", response.data);
      // dispatch(fetchHighscores());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
