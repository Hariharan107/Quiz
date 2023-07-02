import { useQuiz } from "../context/QuizContext";
const Progress = () => {
  const { index, totalQuestions, points, totalPoints, hasAnswered } = useQuiz();
  return (
    <header className='progress'>
      <progress max={totalQuestions} value={index + +hasAnswered} />
      <p>
        Question<strong> {index + 1}</strong>/{totalQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
};

export default Progress;
