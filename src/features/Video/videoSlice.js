import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from 'api/videoApi';
const KEY = "video";

export const fetchCategoriesVideo = createAsyncThunk("fetchCategoriesVideo", async (param, thunkApi) => {
  const data = await videoApi.fetchCategoriesVideo();
  return data;
})

export const fetchByCategoryVideo = createAsyncThunk("fetchByCategoryVideo", async (param, thunkApi) => {
  const { slug, level, timeFrom, timeTo } = param;
  const data = await videoApi.fetchByCategoryVideo(slug, level, timeFrom, timeTo);
  console.log(data)
  return data;
})

export const fetchNextPage = createAsyncThunk("fetchNextPage", async (param, thunkApi) => {
  const { slug, page, level, timeFrom, timeTo } = param;
  const data = await videoApi.fetchNextPage(slug, page, level, timeFrom, timeTo);
  return data;
})

export const fetchSliderBySlug = createAsyncThunk("fetchSliderBySlug", async (param, thunkApi) => {
  const { slug } = param;
  const data = await videoApi.fetchSliderBySlug(slug);
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
    durationSelected: '',
    timeTo: 0,
    timeFrom: '',
    moviesSlider: [],
    titleVideoSelected: '',
    audioPlay: '',
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    raisePage: (state, action) => {
      if (state.page < state.totalPages) {
        state.page = state.page + 1
      }
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setTimeTo: (state, action) => {
      state.timeTo = action.payload;
    },
    setTimeFrom: (state, action) => {
      state.timeFrom = action.payload;
    },
    setTitleVideoSelector: (state, action) => {
      state.titleVideoSelected = action.payload;
    },
    changeSubject: (state, action) => {
      state.timeTo = 0;
      state.timeFrom = '';
      state.level = '';
      state.page = 0;
      state.durationSelected = '';

    },
    setDurationSelected: (state, action) => {
      state.durationSelected = action.payload;
    },
    setAudioPlay: (state, action) => {
      state.audioPlay = action.payload;
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



    },
    [fetchNextPage.fulfilled]: (state, action) => {
      state.movies.data = state.movies.data.concat(action.payload.data);

    },
    [fetchSliderBySlug.fulfilled]: (state, action) => {
      const tempMovie = action.payload.data.slice(0, 5);
      state.moviesSlider = tempMovie;
    }

  },
});

const { reducer, actions } = videoSlice;
export const { setLoading, setAudioPlay, raisePage, setLevel, changeSubject, setTimeFrom, setTimeTo, setDurationSelected, setTitleVideoSelector } = actions;
export default reducer;
