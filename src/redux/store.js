import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { newsLettersReducer } from './newsLettersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    newsLetters: newsLettersReducer,
  },
});
