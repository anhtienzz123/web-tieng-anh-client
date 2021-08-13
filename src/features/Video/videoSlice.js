import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "api/videoApi";
const KEY = "video";

export const fetchCategoriesVideo = createAsyncThunk(
    "fetchCategoriesVideo",
    async (param, thunkApi) => {
        const data = await videoApi.fetchCategoriesVideo();
        return data;
    }
);

export const fetchByCategoryVideo = createAsyncThunk(
    "fetchByCategoryVideo",
    async (param, thunkApi) => {
        const { slug, level, timeFrom, timeTo } = param;
        const data = await videoApi.fetchByCategoryVideo(
            slug,
            level,
            timeFrom,
            timeTo
        );

        return data;
    }
);

export const fetchNextPage = createAsyncThunk(
    "fetchNextPage",
    async (param, thunkApi) => {
        const { slug, page, level, timeFrom, timeTo } = param;
        const data = await videoApi.fetchNextPage(
            slug,
            page,
            level,
            timeFrom,
            timeTo
        );
        console.log("nextpagE: ", data);
        return data;
    }
);

export const fetchSliderBySlug = createAsyncThunk(
    "fetchSliderBySlug",
    async (param, thunkApi) => {
        const { slug } = param;
        const data = await videoApi.fetchSliderBySlug(slug);
        return data;
    }
);

export const fetchVideo = createAsyncThunk(
    "fetchVideo",
    async (param, thunkApi) => {
        const { slug } = param;
        const data = await videoApi.fetchVideo(slug);
        return data;
    }
);
export const fetchMoreVideo = createAsyncThunk(
    "fetchMoreVideo",
    async (param, thunkApi) => {
        const { slug, size } = param;
        const data = await videoApi.fetchMoreVideo(slug, size);
        return data;
    }
);

const videoSlice = createSlice({
    name: KEY,
    initialState: {
        isLoading: false,
        categories: [],
        level: "",
        movies: {},
        page: 0,
        totalPages: 0,
        durationSelected: "",
        timeTo: 0,
        timeFrom: "",
        moviesSlider: [],
        titleVideoSelected: "",
        audioPlay: "",
        video: {},
        more: [],
        showMore: false,
        transcript: [],
        subActive: '',
        sttInSub: '',
        seekTo: '',
        scriptPanes: ' . . . ',
        isPlay: false


    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        raisePage: (state, action) => {
            if (state.page < state.totalPages) {
                state.page = state.page + 1;
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
            state.timeFrom = "";
            state.level = "";
            state.page = 0;
            state.durationSelected = "";
        },
        setDurationSelected: (state, action) => {
            state.durationSelected = action.payload;
        },
        setAudioPlay: (state, action) => {
            state.audioPlay = action.payload;
        },
        setShowMore: (state, action) => {
            state.showMore = !state.showMore;
        },
        setTranscript: (state, action) => {
            state.transcript = action.payload;
        },
        setSubActive: (state, action) => {
            state.subActive = action.payload;
        },
        setSttInSub: (state, action) => {
            state.sttInSub = action.payload;
            let tempScript = state.transcript.find(x => x.stt === action.payload);
            state.scriptPanes = tempScript.content;
        },
        setSeekTo: (state, action) => {
            state.seekTo = action.payload;
        },

        setIsPlay: (state, action) => {
            state.isPlay = action.payload;
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
        },

        [fetchVideo.fulfilled]: (state, action) => {
            state.video = action.payload;
            state.transcript = action.payload.subtitles;
            state.showMore = false;
        },
        [fetchMoreVideo.fulfilled]: (state, action) => {
            state.more = action.payload.data;
        },
    },
});

const { reducer, actions } = videoSlice;
export const {
    setLoading,
    setShowMore,
    setAudioPlay,
    raisePage,
    setLevel,
    changeSubject,
    setTimeFrom,
    setTimeTo,
    setDurationSelected,
    setTitleVideoSelector,
    setTranscript,
    setSubActive,
    setSttInSub,
    setSeekTo,
    setIsPlay
} = actions;
export default reducer;
