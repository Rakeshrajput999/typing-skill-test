// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../slices/typingSlice";
import { useNavigate } from "react-router-dom";

const ResultComponent = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.typing);

  const dispatch = useDispatch();

  return (
    <>
      <div className="text-stone-900 w-full h-full  flex justify-center items-center">
        <div>
          <div className="md:text-6xl text-xl text-center">
            Congratulations!!!{" "}
          </div>

          <div
            className=" m-5 text-center text-lg
        "
          >
            <p>
              You correctly typed {state.correctWord} out of {state.paraLength}{" "}
              words.
            </p>
            <p>
              Your Typing speed is{" "}
              {Math.round(
                (state.correctWord * 60) / (state.initialTime - state.seconds)
              ) ?? 0}{" "}
              words per minute
            </p>
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              className="btn"
              onClick={() => {
                dispatch(resetState());
                navigate("/");
              }}
            >
              Restart Test
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResultComponent;
