import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { setParagraph, setTimer } from "../slices/typingSlice";
import randomParagraphData from "../helper/Data";
const FormComponent = () => {
  const [article, setArticle] = useState();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.typing);
  const fetchArticle = async () => {
    let Number = Math.floor(Math.random() * 10);
    let res = randomParagraphData[Number];
    dispatch(setParagraph(res));
    setArticle(res);
    return res;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setParagraph(article));
    navigate("/test");
  };
  return (
    <>
      <div className="text-stone-950 mt-4">
        <div className=" ">
          <div>
            Copy paste the paragraph for test or click here to generate
            <button onClick={() => fetchArticle()} className="m-4 btn">
              Random Paragraph
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="text-area" className="font-bold text-xl">
                Paragraph
              </label>
            </div>
            <textarea
              required
              className="w-full text-black rounded-xl p-4"
              name="text-area"
              id=""
              cols={30}
              rows={10}
              value={article}
              onChange={(e) => {
                setArticle(e.target.value);
              }}
            ></textarea>
            <div></div>
            <label htmlFor="time" className="font-bold text-xl">
              select duration for test:
            </label>
            <div className="flex max-md:flex-col gap-3 w-full justify-between items-center">
              <div className="flex justify-between items-center w-full ">
                <div>
                  <input
                    type="radio"
                    name="min"
                    id="1-min"
                    value={1}
                    onChange={() => dispatch(setTimer(60))}
                  />
                  <label htmlFor="1-min">1 Min</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="min"
                    id="1-min"
                    value={2}
                    onChange={() => dispatch(setTimer(120))}
                  />
                  <label htmlFor="1-min">2 Min</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="min"
                    id="5-min"
                    value={5}
                    onChange={() => dispatch(setTimer(180))}
                  />
                  <label htmlFor="5-min"> 5 Min </label>
                </div>
              </div>
              <div>OR</div>
              <div>
                <label htmlFor="time" list="min"></label>
                <input
                  className="w-10 rounded-lg pl-1 mx-1 "
                  name="time"
                  type="number"
                  id="time"
                  onChange={(e) => {
                    dispatch(setTimer(e.target.value * 60));
                  }}
                />
                <label htmlFor="">Minutes</label>
              </div>
            </div>
            <div>
              <button type="submit" className="my-3 btn w-full ">
                Start Test
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
