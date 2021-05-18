import GetQuestions from "../components/GetQuestions";
import TheQuiz from "../components/TheQuiz";
import QuizTimer from "../components/QuizTimer";
import "./QuizPage.css";

export default function QuizPage() {
  const questions = GetQuestions();

  return (
    <div className="quiz-container">
      <QuizTimer />
      <div className="quiz">
        {questions !== undefined && questions.length !== 0 ? (
          <TheQuiz data={questions} />
        ) : (
          <span>Loadin...</span>
        )}
      </div>
    </div>
  );
}
