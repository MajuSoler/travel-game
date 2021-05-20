import GetQuestions from "../components/GetQuestions";
import TheQuiz from "../components/TheQuiz";
import QuizTimer from "../components/QuizTimer";
import QuizScore from "../components/QuizScore";
import "../Css/QuizPage.css";

export default function QuizPage() {
  const questions = GetQuestions();

  return (
    <div className="quiz-container">
      <div className="quiz">
        {questions !== undefined && questions.length !== 0 ? (
          <div>
            <TheQuiz data={questions} />
            <div className="quiz-controls">
              <QuizTimer />
              <QuizScore />
            </div>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}
