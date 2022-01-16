import { createSlice } from "@reduxjs/toolkit";

interface PlayerState {
  loading: boolean;
  playing: boolean;
}

interface LoadingAction {
  payload: boolean;
}

const initialState: PlayerState = { loading: false, playing: false };

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    toggle: (state: PlayerState) => {
      if (state.playing) {
        // pause
        state.loading = false;
        state.playing = false;
      } else {
        // play
        state.loading = true;
        state.playing = true;
      }
    },
    loading: (state: PlayerState, action: LoadingAction) => {
      state.loading = action.payload;
    },
  },
});

export const { toggle, loading } = playerSlice.actions;

export default playerSlice.reducer;
