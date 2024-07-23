import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("x-auth-token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("x-auth-token", action.payload);
    },

    logout: (state) => {
      state.token = null;
      localStorage.removeItem("x-auth-token");
    },
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
