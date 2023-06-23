import React, { useEffect } from "react";

const Timer = ({ timeRemaining, onTimer }) => {
  const mins = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      onTimer();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [onTimer]);
  return (
    <div className='timer'>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
