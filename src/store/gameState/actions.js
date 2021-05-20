export const SET_SCORE = "SET_SCORE";
export const TOGGLE = "TOGGLE";

export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});

export const toggleMusic = (music) => ({
  type: TOGGLE,
  payload: music,
});
