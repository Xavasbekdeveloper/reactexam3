import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const orderSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleOrder: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { toggleOrder } = orderSlice.actions;
export default orderSlice.reducer;
