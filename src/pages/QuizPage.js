import TheQuiz from "../components/TheQuiz";

export default function QuizPage() {
  function onClickAnswer(answerId) {
    console.log(`You clicked on answer ${answerId}`);
  }

  return (
    <div className="quiz-container">
      <div className="quiz-timer">
        <h1>30 seconds</h1>
      </div>
      <div className="quiz">
        <TheQuiz clickHandler={onClickAnswer} />
      </div>
    </div>
  );
}
