import TheQuiz from "../components/TheQuiz";
import QuizTimer from "../components/QuizTimer";
import "./QuizPage.css";

export default function QuizPage() {
  function onClickAnswer(answerId) {
    console.log(`You clicked on answer ${answerId}`);
  }

  return (
    <div className="quiz-container">
      <QuizTimer />
      <div className="quiz">
        <TheQuiz clickHandler={onClickAnswer} />
      </div>
    </div>
  );
}
