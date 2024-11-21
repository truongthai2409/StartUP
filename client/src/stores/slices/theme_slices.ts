import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "types/admin/admin.type";

const savedTheme = localStorage.getItem("theme");
const initialState: ThemeState = {
  theme: savedTheme ? JSON.parse(savedTheme).theme : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
