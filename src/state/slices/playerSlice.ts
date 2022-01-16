import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  value: boolean;
}

const initialState: PlayerState = { value: false };

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    toggle: (state: PlayerState) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = playerSlice.actions;

export default playerSlice.reducer;
