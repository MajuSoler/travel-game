import GetQuestions from "../components/GetQuestions";
import TheQuiz from "../components/TheQuiz";
import QuizTimer from "../components/QuizTimer";
import "./QuizPage.css";

export default function QuizPage() {
  function onClickAnswer(answerId) {
    console.log(`You clicked on answer ${answerId}`);
  }

  const questions = GetQuestions();

  return (
    <div className="quiz-container">
      <QuizTimer />
      <div className="quiz">
        {questions !== undefined && questions.length !== 0 ? (
          <TheQuiz clickHandler={onClickAnswer} data={questions} />
        ) : null}
      </div>
    </div>
  );
}
