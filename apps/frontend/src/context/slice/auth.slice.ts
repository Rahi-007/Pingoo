import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@/interface/user.interface";

export interface AuthState {
  accessToken: string | null;
  user: IUser | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

export interface SetAuthPayload {
  accessToken: string;
  user: IUser;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Omit<SetAuthPayload, "isHydrated">>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    clearAuth: state => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
