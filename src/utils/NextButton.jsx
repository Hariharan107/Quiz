
const NextButton = ({ onClick, index, totalQuestions, onFinish }) => {
  const isLastQuestion = index === totalQuestions - 1;
  const buttonLabel = isLastQuestion ? "Finish" : "Next";

  return (
    <button
      onClick={isLastQuestion ? onFinish : onClick}
      className='btn btn-ui'
    >
      {buttonLabel}
    </button>
  );
};

export default NextButton;
