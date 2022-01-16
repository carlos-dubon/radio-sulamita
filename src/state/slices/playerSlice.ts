import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  value: boolean;
}

const initialState: PlayerState = { value: false };

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    start: (state: PlayerState) => {
      state.value = true;
    },
    stop: (state: PlayerState) => {
      state.value = false;
    },
    toggle: (state: PlayerState) => {
      state.value = !state.value;
    },
  },
});

export const { start, stop, toggle } = playerSlice.actions;

export default playerSlice.reducer;
