import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

export const fetchQuestions = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/question`);

      // console.log("response.data", response.data);
      dispatch(fetchQuestionsSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const newQuestion = (
  answer_1,
  answer_2,
  answer_3,
  answer_4,
  correct_answer,
  question,
  img_url
) => {
  return async (dispatch, getState) => {
    try {
      await axios.post(`${apiUrl}/question`, {
        answer_1,
        answer_2,
        answer_3,
        answer_4,
        correct_answer,
        question,
        img_url,
      });

      // console.log("response.data", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
