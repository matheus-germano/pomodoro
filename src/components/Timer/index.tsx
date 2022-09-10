import { useEffect, useState, useRef } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { IoPlay } from 'react-icons/io5';
import { BsFillPauseFill } from 'react-icons/bs';

import { TimerContainer, TimerWrapper, TimerDisplay, TimerControllers } from './styles';

const INITIAL_TIMER_SECONDS = 25 * 60; //25 minutes
const REST_TIMER_SECONDS = 5 * 60; //5 minutes

export function Timer() {
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIMER_SECONDS);
  const [isRestTime, setIsRestTime] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(true);

  const isTimerPausedRef = useRef(isTimerPaused);
  const isRestTimeRef = useRef(isRestTime);

  let minutes = Math.floor(secondsAmount / 60);
  let seconds = secondsAmount % 60;

  Notification.requestPermission();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTimerPausedRef.current) {
        return;
      }

      if (secondsAmount > 0) {
        setSecondsAmount(prev => prev - 1);
      } else if (isRestTimeRef.current) {
        isRestTimeRef.current = false;
        setIsRestTime(isRestTimeRef.current);
        setSecondsAmount(INITIAL_TIMER_SECONDS);
      } else {
        isRestTimeRef.current = true;
        setIsRestTime(isRestTimeRef.current);
        setSecondsAmount(REST_TIMER_SECONDS);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsAmount, isTimerPausedRef.current]);

  function handleRestartTimer() {
    setSecondsAmount(INITIAL_TIMER_SECONDS);
  }

  function handlePauseTimer() {
    isTimerPausedRef.current = !isTimerPausedRef.current;
    setIsTimerPaused(isTimerPausedRef.current);
  }

  return (
    <TimerContainer>
      <h2>{isRestTimeRef.current ? "Let's rest! 😮‍💨🍃" : "Let's work! 😄🚀"}</h2>
      <TimerWrapper>
        <TimerDisplay>
          <span>{String(minutes).padStart(2, '0')}</span>
          {/* <span>:</span> */}
          <span>{String(seconds).padStart(2, '0')}</span>
        </TimerDisplay>
        <TimerControllers>
          <button onClick={handlePauseTimer}>{isTimerPausedRef.current ? <IoPlay size={20} /> : <BsFillPauseFill size={20} />}</button>
          <button onClick={handleRestartTimer}><VscDebugRestart size={20} /></button>
        </TimerControllers>
      </TimerWrapper>
    </TimerContainer>
  );
}