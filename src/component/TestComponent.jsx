import { useDispatch, useSelector } from "react-redux";

import {
  calculateScore,
  pauseTimer,
  resetTimer,
  setTypedText,
} from "../slices/typingSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const TestComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.typing);
  useEffect(() => {
    if (state.seconds === 0) {
      dispatch(pauseTimer());
      dispatch(calculateScore());
      navigate("/result");
    }
  }, [state]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(resetTimer());
    dispatch(calculateScore());
    navigate("/result");
  };

  const [currIdx, setCurrIdx] = useState(0);

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className="md:flex  gap-4">
            <div className=" md:w-1/2 w-full md:m-0 mb-4 border-4 rounded-xl border-cyan-900 bg-slate-300 p-2 ">
              {state.paragraph.split(" ").map((e, idx) => {
                return (
                  <span
                    className={`${currIdx === idx ? "currWord" : ""}`}
                    key={idx}
                  >
                    {e + " "}
                  </span>
                );
              })}
            </div>
            <div className="md:w-1/2">
              <textarea
                disabled={!state.isTimerRunning}
                className="md:w:1/2 w-full h-full rounded-xl p-2"
                name="paragraph"
                id=""
                cols={30}
                rows={10}
                value={state.typedText}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    dispatch(setTypedText(state.typedText + " "));
                    setCurrIdx(currIdx + 1);
                  } else if (e.key === "Backspace") {
                    if (state.typedText[state.typedText.length - 1] === " ") {
                      setCurrIdx(Math.max(0, currIdx - 1));
                    }
                    dispatch(setTypedText(state.typedText.slice(0, -1)));
                  } else if (e.key.length === 1)
                    dispatch(setTypedText(state.typedText + e.key));
                }}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button
              disabled={!state.isTimerRunning}
              type="submit"
              className="btn mt-4 w-1/4"
            >
              Result
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default TestComponent;
