import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {
      const { id, front, back } = action.payload;
      state[id] = { id, front, back };
    }
  }
});

export const selectCards = (state) => state.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
