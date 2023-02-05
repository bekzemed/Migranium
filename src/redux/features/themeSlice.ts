import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  backgroundTheme: string;
  selected: number;
};

const initialState: ThemeState = {
  backgroundTheme: "bg-secondary",
  selected: -1,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }: PayloadAction<any>) => {
      state.backgroundTheme = payload;
    },
    selectedTheme: (state, { payload }: PayloadAction<any>) => {
      state.selected = payload;
    },
  },
});

export const { changeTheme, selectedTheme } = themeSlice.actions;
export default themeSlice.reducer;
