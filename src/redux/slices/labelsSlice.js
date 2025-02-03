import { createSlice } from '@reduxjs/toolkit';

const myContactLabel = {
    id:"6",
    name: "My-Contact",
    memberCount: 0,
  }
  
const initialState = {
    selectedLabels: myContactLabel,
};


const labelsSlice = createSlice({
    name: 'labels',
    initialState,
    reducers: {
        setSelectedLabels: (state, action) => {
            state.selectedLabels = action.payload;
        },
    },
});

export const { setSelectedLabels } = labelsSlice.actions;

export default labelsSlice.reducer;
