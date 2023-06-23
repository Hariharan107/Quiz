import Options from "./Options";
const Questions = ({
  questions: { question, options, correctOption },
  onAnswer,
  answer,
}) => {
  return (
    <div>
      <h4>{question}</h4>
      <div className='options'>
        <Options
          options={options}
          key={options}
          onAnswer={onAnswer}
          answer={answer}
          correctOption={correctOption}
        />
      </div>
    </div>
  );
};

export default Questions;
