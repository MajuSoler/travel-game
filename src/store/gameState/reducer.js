import { SET_SCORE } from "./actions";

const initialState = {
  score: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCORE: {
      return {
        ...state,
        score: action.payload,
      };
    }
    default:
      return state;
  }
}
