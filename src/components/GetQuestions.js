import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllQuestions } from "../store/questions/selectors";
import { fetchQuestions } from "../store/questions/actions";

export default function GetQuestions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let allQuestions = useSelector(selectAllQuestions);

  shuffle(allQuestions);

  return allQuestions;
}
