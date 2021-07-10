import { createSlice } from "@reduxjs/toolkit";

const KEY = "course";

const courseSlice = createSlice({
	name: KEY,
	initialState: {
		isLoading: false,
	},
	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers: {},
});

const { reducer, actions } = courseSlice;
export const { setLoading } = actions;
export default reducer;
