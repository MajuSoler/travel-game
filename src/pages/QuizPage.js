import TheQuiz from "../components/TheQuiz";
import "./QuizPage.css";

export default function QuizPage() {
  function onClickAnswer(answerId) {
    console.log(`You clicked on answer ${answerId}`);
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-timer">30 seconds</h1>
      <div className="quiz">
        <TheQuiz clickHandler={onClickAnswer} />
      </div>
    </div>
  );
}
