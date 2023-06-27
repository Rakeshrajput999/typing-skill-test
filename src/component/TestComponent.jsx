import { useDispatch, useSelector } from "react-redux";

import {
  calculateScore,
  pauseTimer,
  resetTimer,
  setTypedText,
} from "../slices/typingSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const TestComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.typing);

  useEffect(() => {
    if (state.seconds === 0) {
      dispatch(pauseTimer());
      navigate("/result");
    }
  }, [dispatch, navigate, state]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(resetTimer());
    dispatch(calculateScore());
    navigate("/result");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className="md:flex  gap-4">
            <div className=" md:w-1/2 w-full md:m-0 mb-4 border-4 rounded-xl border-cyan-900 bg-slate-300 p-2 ">
              {state.paragraph}
            </div>
            <div className="md:w-1/2">
              {state.isTimerRunning}
              <textarea
                disabled={!state.isTimerRunning}
                className="md:w:1/2 w-full h-full rounded-xl p-2"
                name="paragraph"
                id=""
                cols={30}
                rows={10}
                onChange={(e) => dispatch(setTypedText(e.target.value))}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button type="submit" className="btn mt-4 w-1/4">
              Result
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default TestComponent;
