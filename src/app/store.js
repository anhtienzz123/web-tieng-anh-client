import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import me from "features/Me/meSlice";
import login from "features/Login/loginSlice";
import home from "features/Home/homeSlice";
import course from "features/Courses/courseSlice";
import translate from "features/Translate/translateSlice";
import wordNote from "features/WordNote/wordNoteSlice";

const rootReducer = {
	global,
	me,
	login,
	home,
	course,
	translate,
	wordNote,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
