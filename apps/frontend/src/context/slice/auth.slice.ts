import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@/interface/user.interface";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: IUser | null;
  isHydrated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isHydrated: false,
};

export interface SetAuthPayload {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Omit<SetAuthPayload, "isHydrated">>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      state.isHydrated = true;
    },
    clearAuth: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.isHydrated = false;
    },
    setHydrated: state => {
      state.isHydrated = true;
    },
  },
});

export const { setAuth, clearAuth, setHydrated } = authSlice.actions;

export default authSlice.reducer;
