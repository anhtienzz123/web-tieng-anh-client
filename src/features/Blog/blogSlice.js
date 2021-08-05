import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogApi from "api/blogApi";

const KEY = "blog";

export const fetchBlogs = createAsyncThunk(
	`${KEY}/fetchBlogs`,
	async (params, thunkApi) => {
		const data = await blogApi.getBlogs(params);
		return data;
	}
);

export const fetchBlogDetail = createAsyncThunk(
	`${KEY}/fetchBlogDetail`,
	async (params, thunkApi) => {
		const { slug } = params;
		const data = await blogApi.getBlogDetail(slug);
		return data;
	}
);

export const fetchBlogCategories = createAsyncThunk(
	`${KEY}/fetchBlogCategories`,
	async () => {
		const data = await blogApi.getBlogCategories();
		return data;
	}
);

const courseSlice = createSlice({
	name: KEY,
	initialState: {
		isLoading: false,
		blogCategories: [],
		blogs: {},
		blogDetail: {},
	},
	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers: {
		// Blogs
		[fetchBlogs.pending]: (state, action) => {},
		[fetchBlogs.fulfilled]: (state, action) => {
			state.blogs = action.payload;
		},
		[fetchBlogs.rejected]: (state, action) => {},

		// Blog detail
		[fetchBlogDetail.pending]: (state, action) => {},
		[fetchBlogDetail.fulfilled]: (state, action) => {
			state.blogDetail = action.payload;
		},
		[fetchBlogDetail.rejected]: (state, action) => {},

		// Blog categories
		[fetchBlogCategories.pending]: (state, action) => {},
		[fetchBlogCategories.fulfilled]: (state, action) => {
			state.blogCategories = action.payload;
		},
		[fetchBlogCategories.rejected]: (state, action) => {},
	},
});

const { reducer, actions } = courseSlice;
export const { setLoading } = actions;
export default reducer;
