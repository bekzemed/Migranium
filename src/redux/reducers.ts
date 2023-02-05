import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

export const rootReducer = combineReducers({
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
