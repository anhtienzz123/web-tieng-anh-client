import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import me from "features/Me/meSlice";
import login from "features/Login/loginSlice";
import home from "features/Home/homeSlice";
import exam from "features/OnlineExam/onlineExamSlice";
import course from "features/Courses/courseSlice";
import translate from "features/Translate/translateSlice";

const rootReducer = {
  global,
  me,
  login,
  home,
  exam,
  course,
  translate,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
