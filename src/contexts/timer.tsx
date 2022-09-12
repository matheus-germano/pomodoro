import { createContext, useState } from "react";

const INITIAL_WORK_TIME_SECONDS = 25 * 60; //25 minutes
const INITIAL_REST_TIME_SECONDS = 5 * 60; //5 minutes

interface TimerContextProps {
  children: React.ReactNode;
}

interface TimerCreateContextProps {
  workTime: number;
  setWorkTime: (workTime: number) => void;
  restTime: number;
  setRestTime: (restTime: number) => void;
}

export const TimerContext = createContext<TimerCreateContextProps>({
  workTime: INITIAL_WORK_TIME_SECONDS,
  setWorkTime: (workTime: number) => { },
  restTime: INITIAL_REST_TIME_SECONDS,
  setRestTime: (restTime: number) => { }
});

export function TimerContextProvider({ children }: TimerContextProps) {
  const [workTime, setWorkTime] = useState<number>(INITIAL_WORK_TIME_SECONDS);
  const [restTime, setRestTime] = useState<number>(INITIAL_REST_TIME_SECONDS);

  return (
    <TimerContext.Provider value={{ workTime, setWorkTime, restTime, setRestTime }}>
      {children}
    </TimerContext.Provider>
  );
}