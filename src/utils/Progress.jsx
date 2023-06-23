import React from "react";

const Progress = ({
  index,
  totalQuestions,
  points,
  totalPoints,
  hasAnswered,
}) => {
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
