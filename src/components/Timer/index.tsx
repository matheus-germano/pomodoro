import { useEffect, useState } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { IoPlay } from 'react-icons/io5';

import { TimerContainer, TimerWrapper, TimerDisplay, TimerControllers } from './styles';

const INITIAL_TIMER_SECONDS = 25 * 60; //25 minutes
const REST_TIMER_SECONDS = 5 * 60; //5 minutes

export function Timer() {
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIMER_SECONDS);
  const [isRestTime, setIsRestTime] = useState(false);

  let minutes = Math.floor(secondsAmount / 60);
  let seconds = secondsAmount % 60;

  useEffect(() => {
    if (secondsAmount > 0) {
      setTimeout(() => {
        setSecondsAmount(prev => prev - 1);
      }, 1000);
    } else if (isRestTime) {
      setIsRestTime(false);
      setSecondsAmount(INITIAL_TIMER_SECONDS);
    } else {
      setIsRestTime(true);
      setSecondsAmount(REST_TIMER_SECONDS);
    }
  }, [secondsAmount]);

  function restartTimer() {
    setSecondsAmount(INITIAL_TIMER_SECONDS);
  }

  return (
    <TimerContainer>
      <h2>{isRestTime ? "Let's rest! 😮‍💨🍃" : "Let's work! 😄🚀"}</h2>
      <TimerWrapper>
        <TimerDisplay>
          <span>{String(minutes).padStart(2, '0')}</span>
          {/* <span>:</span> */}
          <span>{String(seconds).padStart(2, '0')}</span>
        </TimerDisplay>
        <TimerControllers>
          <button><IoPlay size={20} /></button>
          <button><VscDebugRestart size={20} /></button>
        </TimerControllers>
      </TimerWrapper>
    </TimerContainer>
  );
}