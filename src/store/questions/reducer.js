import { FETCH_QUESTIONS_SUCCESS } from "./actions";

const initialState = {
  allQuestions: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS: {
      return {
        ...state,
        allQuestions: [...action.payload],
      };
    }
    default:
      return state;
  }
}
