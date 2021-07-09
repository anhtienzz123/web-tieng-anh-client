import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import me from "features/Me/meSlice";
import login from "features/Login/loginSlice";
import home from "features/Home/homeSlice";

const rootReducer = {
  global,
  me,
  login,
  home,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
