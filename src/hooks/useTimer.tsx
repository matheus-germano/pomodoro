import { useContext } from "react";

import { TimerContext } from "../contexts/timer";

export function useTimer() {
  const value = useContext(TimerContext);

  return value;
}