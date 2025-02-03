import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactSlice";
import labelsReducer from "./slices/labelsSlice";

const store = configureStore({
  reducer: {
    labels: labelsReducer,
    contacts: contactsReducer, // Add contacts to store
  },
});

export default store;
