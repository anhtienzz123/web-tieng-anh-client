import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookApi from "api/bookApi";
import examApi from "api/examApi";

const KEY = "perPart";

export const fetchBooks = createAsyncThunk(
  `${KEY}/fetchBooks`,
  async (params, thunkApi) => {
    const data = await bookApi.fetchBooks();

    return data;
  }
);

export const fetchQuestionsOfPart = createAsyncThunk(
  `${KEY}/fetchQuestionsOfPart`,
  async (params, thunkApi) => {
    const { numberPart, examSlug } = params;
    const questionsResult = await examApi.fetchQuestionsOfPart(
      numberPart,
      examSlug
    );

    return questionsResult;
  }
);

const meSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
    books: [],
    questions: [],
    selectedIndex: 0,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedIndexNext: (state, action) => {
      state.selectedIndex += 1;
    },
    restoreQuestionsDefault: (state, action) => {
      state.questions = [];
      state.selectedIndex = 0;
    },
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
    [fetchQuestionsOfPart.fulfilled]: (state, action) => {
      state.questions = action.payload;
      state.selectedIndex = 0;
    },
  },
});

const { reducer, actions } = meSlice;
export const { setLoading, setSelectedIndexNext, restoreQuestionsDefault } =
  actions;
export default reducer;
