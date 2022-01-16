import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    value: false,
  },
  reducers: {
    start: (state) => {
      state.value = true;
    },
    stop: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { start, stop, toggle } = playerSlice.actions;

export default playerSlice.reducer;
