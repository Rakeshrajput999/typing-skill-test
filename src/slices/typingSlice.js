import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paragraph: "",
  seconds: 60,
  isTimerRunning: false,
  paraLength: 0,
  correctWord: 0,
  correctSentence: 0,
  initialTime: 0,
  typedText: "",
  status: "idle",
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.seconds = action.payload;
    },

    startTimer: (state) => {
      state.initialTime = state.seconds;

      state.isTimerRunning = true;
    },

    pauseTimer: (state) => {
      state.isTimerRunning = false;
    },

    resetTimer: (state) => {
      state.seconds = 0;
      state.isTimerRunning = false;
    },

    setParagraph: (state, action) => {
      state.paragraph = action.payload;
    },

    setTypedText: (state, action) => {
      state.typedText = action.payload;
    },

    calculateScore: (state) => {
      const paragraphWords = state.paragraph.split(" ");
      const typedWords = state.typedText.split(" ");
      let correctWords = 0;

      typedWords.forEach((word, index) => {
        if (word === paragraphWords[index]) {
          correctWords++;
        }
      });

      state.correctWord = correctWords;
      state.paraLength = paragraphWords.length;
    },
    resetState: () => initialState,
  },
});

export const {
  setTimer,
  startTimer,
  pauseTimer,
  resetTimer,
  setParagraph,
  setTypedText,
  calculateScore,
  resetState,
} = typingSlice.actions;
export default typingSlice.reducer;
