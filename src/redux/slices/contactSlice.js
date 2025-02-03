import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  selectedContact: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload; // Update contacts list
    },
    setSelectedContact: (state, action) => {
      state.selectedContact = action.payload; // Update selected contact
    },
  },
});

export const { setContacts, setSelectedContact } = contactsSlice.actions;
export default contactsSlice.reducer;
