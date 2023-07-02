import { useQuiz } from "../context/QuizContext";
const StartScreen = () => {
  const { totalQuestions, startQuiz } = useQuiz();
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz</h2>
      <h3>{totalQuestions} Questions to test your React Knowledge</h3>
      <button className='btn brn-ui' onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
