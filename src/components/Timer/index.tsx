import { useEffect, useState, useRef } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { IoPlay } from 'react-icons/io5';
import { BsFillPauseFill } from 'react-icons/bs';

import { useTimer } from '../../hooks/useTimer';

import { TimerContainer, TimerWrapper, TimerDisplay, TimerControllers } from './styles';

export function Timer() {
  const { workTime, restTime } = useTimer();

  const [secondsAmount, setSecondsAmount] = useState(workTime);
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
        setSecondsAmount(workTime);
      } else {
        isRestTimeRef.current = true;
        setIsRestTime(isRestTimeRef.current);
        setSecondsAmount(restTime);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsAmount, isTimerPausedRef.current]);

  function handleRestartTimer() {
    setSecondsAmount(workTime);
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