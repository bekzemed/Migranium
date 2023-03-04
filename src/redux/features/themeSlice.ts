import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  backgroundTheme: string;
  fillColor: string;
  textColor: string;
  selected: number;
  color: string;
  switchColor: string;
};

const initialState: ThemeState = {
  backgroundTheme: "bg-secondary",
  fillColor: "fill-primary",
  color: "#0070BA",
  textColor: "text-primary",
  selected: -1,
  switchColor: "peer-checked:bg-primary",
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
    changeSwitchColor: (state, { payload }: PayloadAction<any>) => {
      state.switchColor = payload;
    },
  },
});

export const {
  changeTheme,
  selectedTheme,
  changeFillColor,
  changeColor,
  changeTextColor,
  changeSwitchColor,
} = themeSlice.actions;
export default themeSlice.reducer;
