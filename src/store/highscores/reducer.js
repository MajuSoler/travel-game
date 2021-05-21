import { FETCH_HIGHSCORES_SUCCESS } from "./actions";

const initialState = {
  allHighscores: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HIGHSCORES_SUCCESS: {
      return {
        ...state,
        allHighscores: [...action.payload],
      };
    }
    default:
      return state;
  }
}
