import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
const Questions = ({ onAnswer, answer }) => {
  const {
    questions: { question, options, correctOption },
  } = useQuiz();
  return (
    <div>
      <h4>{question}</h4>
      <div className='options'>
        <Options
          options={options}
          key={options}
          onAnswer={next}
          answer={answer}
          correctOption={correctOption}
        />
      </div>
    </div>
  );
};

export default Questions;
