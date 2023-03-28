import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsLetters: [],
};

const newsLetters = createSlice({
  name: 'newsLetters',

  initialState: initialState,

  reducers: {
    saveEmail(state, { payload }) {
      ///Send infor to back
      state.newsLetters = [...state.newsLetters, payload];
    },
  },
});

export const { saveEmail } = newsLetters.actions;
export const newsLettersReducer = newsLetters.reducer;
