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
      const next: boolean = state.playing ? false : true;
      state.loading = next;
      state.playing = next;
    },
    loading: (state: PlayerState, action: LoadingAction) => {
      state.loading = action.payload;
    },
  },
});

export const { toggle, loading } = playerSlice.actions;

export default playerSlice.reducer;
