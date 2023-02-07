import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  backgroundTheme: string;
  fillColor: string;
  textColor: string;
  selected: number;
  color: string;
};

const initialState: ThemeState = {
  backgroundTheme: "bg-secondary",
  fillColor: "fill-primary",
  color: "#0070BA",
  textColor: "text-primary",
  selected: -1,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }: PayloadAction<any>) => {
      state.backgroundTheme = payload;
    },
    changeFillColor: (state, { payload }: PayloadAction<any>) => {
      state.fillColor = payload;
    },
    selectedTheme: (state, { payload }: PayloadAction<any>) => {
      state.selected = payload;
    },
    changeColor: (state, { payload }: PayloadAction<any>) => {
      state.color = payload;
    },
    changeTextColor: (state, { payload }: PayloadAction<any>) => {
      state.textColor = payload;
    },
  },
});

export const {
  changeTheme,
  selectedTheme,
  changeFillColor,
  changeColor,
  changeTextColor,
} = themeSlice.actions;
export default themeSlice.reducer;
