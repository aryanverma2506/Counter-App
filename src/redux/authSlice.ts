import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  displayName: string;
  email: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.user = {
        uid: new Date().toISOString() + "-" + Math.random(),
        displayName: "Hello User",
        email: action.payload,
      };
    },
    signOut: (state, action: PayloadAction) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
