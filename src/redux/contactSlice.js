import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState,

  reducers: {
    addContact(state, { payload }) {
      ///Send infor to back
      state.contacts = [...state.contacts, payload];
    },
  },
});

export const { addContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
