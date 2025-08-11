/* eslint-disable @typescript-eslint/no-explicit-any */
// store/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "../../lib/api";

interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<{ token: string; user?: any }>) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user || null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const login =
  (username: string, password: string) => async (dispatch: any) => {
    dispatch(loginStart());
    try {
      const { access } = await apiService.login(username, password);
      localStorage.setItem("token", access);
      dispatch(loginSuccess({ token: access }));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export const register =
  (username: string, email: string, password: string) =>
  async (dispatch: any) => {
    dispatch(loginStart());
    try {
      await apiService.register(username, email, password);
      const { access } = await apiService.login(username, password);
      localStorage.setItem("token", access);
      dispatch(loginSuccess({ token: access }));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export default authSlice.reducer;
