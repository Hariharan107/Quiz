const Options = ({ options, onAnswer, answer, correctOption }) => {
  const hasAnswered = answer !== null;
  return (
    <>
      {options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          onClick={() => onAnswer(index)}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default Options;
