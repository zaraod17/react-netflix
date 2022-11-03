import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface AuthState {
  token: string;
  creds: {
    email: string;
    password: string;
    username: string;
  };
}

const initialState: AuthState = {
  token: "",
  creds: {
    email: "",
    password: "",
    username: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
