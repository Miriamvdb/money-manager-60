import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit: (state, action) => {
      console.log("Hello from reducer - deposit");
      state.amount = state.amount + action.payload;
    },
    withdraw: (state, action) => {
      console.log("Hello from reducer - withdraw");
      state.amount = state.amount - action.payload;
    },
    reset: (state, action) => {
      console.log("Hello from reducer - reset");
      //   return initialState; // OR
      state.amount = initialState.amount;
    },
  },
});

export const { deposit, withdraw, reset } = balanceSlice.actions;

export default balanceSlice.reducer;
