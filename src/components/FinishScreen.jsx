import { RestartButton } from "./index.js";
const FinishScreen = ({ points, totalPoints, highScore, onRestart }) => {
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className='result'>
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>Highscore: {highScore} points</p>
      <RestartButton onRestart={onRestart} />
    </>
  );
};

export default FinishScreen;
