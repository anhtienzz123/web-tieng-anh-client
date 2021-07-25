import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from 'api/videoApi';
const KEY = "video";

export const fetchCategoriesVideo = createAsyncThunk("fetchCategoriesVideo", async (param, thunkApi) => {
  const data = await videoApi.fetchCategoriesVideo();
  return data;
})

export const fetchByCategoryVideo = createAsyncThunk("fetchByCategoryVideo", async (param, thunkApi) => {
  const { slug } = param;
  const data = await videoApi.fetchByCategoryVideo(slug);

  return data;
})

export const fetchNextPage = createAsyncThunk("fetchNextPage", async (param, thunkApi) => {
  const { slug, page } = param;
  const data = await videoApi.fetchNextPage(slug, page);

  return data;
})




const videoSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
    categories: [],
    level: '',
    movies: {},
    page: 0,
    totalPages: 0,

  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    raisePage: (state, action) => {
      if (state.page < state.totalPages) {
        state.page = state.page + 1
      }
    }

  },
  extraReducers: {
    [fetchCategoriesVideo.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },

    [fetchByCategoryVideo.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
      // state.level = 
    },
    [fetchNextPage.fulfilled]: (state, action) => {
      state.movies.data = state.movies.data.concat(action.payload.data);

    }

  },
});

const { reducer, actions } = videoSlice;
export const { setLoading, raisePage } = actions;
export default reducer;
