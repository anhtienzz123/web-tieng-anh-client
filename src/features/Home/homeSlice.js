import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Image from 'constant/image';
const KEY = "home";
const initialState = {
  listTestRecommend: [
    {
      id: 1,
      img: Image.TEST_CARD,
      titleSetTest: 'ETS 2020',
      titleTest: 'TEST 2',
      view: 100
    },
    {
      id: 2,
      img: Image.TEST_CARD,
      titleSetTest: 'ETS 2020',
      titleTest: 'TEST 3',
      view: 100
    }
    , {
      id: 3,
      img: Image.TEST_CARD,
      titleSetTest: 'ETS 2020',
      titleTest: 'TEST 4',
      view: 100
    }
    , {
      id: 4,
      img: Image.TEST_CARD,
      titleSetTest: 'ETS 2020',
      titleTest: 'TEST 5',
      view: 100

    }
  ],
  listVideoRecommend: [
    {
      id: 1,
      thumbnail: Image.TEST_VIDEO,
      titleVideo: 'Dậy sớm để thành công 1',
      view: 100
    },
    {
      id: 2,
      thumbnail: Image.TEST_VIDEO,
      titleVideo: 'Dậy sớm để thành công 2',
      view: 100
    },
    {
      id: 3,
      thumbnail: Image.TEST_VIDEO,
      titleVideo: 'Dậy sớm để thành công 3',
      view: 100
    },
    {
      id: 4,
      thumbnail: Image.TEST_VIDEO,
      titleVideo: 'Dậy sớm để thành công 4',
      view: 100
    },
    {
      id: 5,
      thumbnail: Image.TEST_VIDEO,
      titleVideo: 'Dậy sớm để thành công 5',
      view: 100
    },
  ]



}





const homeSlice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = homeSlice;
export const { setLoading } = actions;
export default reducer;
