import { SET_SCORE, TOGGLE } from "./actions";

const initialState = {
  score: null,
  musicPlaying: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCORE: {
      return {
        ...state,
        score: action.payload,
      };
    }
    case TOGGLE: {
      return {
        ...state,
        musicPlaying: action.payload,
      };
    }
    default:
      return state;
  }
}
