import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // pauseTimer,
  // resetTimer,
  setTimer,
  startTimer,
} from "../slices/typingSlice";

const TimerComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.typing);

  useEffect(() => {
    let interval = null;

    if (state?.isTimerRunning) {
      interval = setInterval(() => {
        dispatch(setTimer(state?.seconds - 1));
      }, 1000);
    } else if (!state?.isTimerRunning && state?.seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [dispatch, state?.isTimerRunning, state?.seconds]);

  return (
    <div className="flex justify-between">
      <p className="font-bold">Timer: {state?.seconds} seconds</p>
      <button onClick={() => dispatch(startTimer())} className="btn">
        Start
      </button>
      {/* <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button> */}
    </div>
  );
};

export default TimerComponent;
