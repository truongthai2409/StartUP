import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "types/auth";

const initialState: AuthState = {
  userId: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeNdYzHmaqHryVdrkeR3NI7Jtov9w3xedCg&s'
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state: AuthState, action: PayloadAction<AuthState>) {
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout(state: AuthState) {
      state.userId = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
    setAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
  },
});
export const { loginSuccess, logout, setAvatar } = authSlice.actions;

export default authSlice.reducer;
