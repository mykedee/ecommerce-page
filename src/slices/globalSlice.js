import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartCard: false,
  searchCard: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartCard = !state.cartCard;
    },
    toggleSearchCard: (state) => {
      state.searchCard = !state.searchCard;
    },
  },
});

export const { toggleCart, toggleSearchCard } = globalSlice.actions;

export default globalSlice.reducer;
