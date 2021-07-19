import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import image_exam from 'assets/image/toeic_exam.jpg';
import { answers } from 'constants/ToeicSheet';
import { test } from 'constants/ToeicQuestion';
import testExam from 'constants/QuestionTemp';
import bookApi from 'api/bookApi';
import examApi from 'api/examApi';

const KEY = 'exam';

export const fetchBooks = createAsyncThunk("fetchBook", async (params, thunkApi) => {

    const data = await bookApi.fetchBooks();

    return data;
});


export const fetchExam = createAsyncThunk("fetchExam", async (params, thunkApi) => {
    const { slug } = params;
    const data = await examApi.fetchExamBySlug(slug);
    console.log('data exam', data)
    return data;
});

export const fetchResult = createAsyncThunk('fetchResult', async (params, thunkApi) => {
    const { slug, answers } = params;
    const data = await examApi.fetchResultBySlug(slug, answers);
    console.log(data);
    return data;
})


const examSlice = createSlice({
    name: KEY,
    initialState: {
        isLoading: false,
        setExam: [],
        examSelected: '',
        answers: answers,
        questions: {},
        examCheckin: '',
        scrollId: 'top',
        subPartSelected: 0,
        part3MaxPage: 0,
        part4MaxPage: 0,
        part6MaxPage: 0,
        part7MaxPage: 0,
        result: {}

    }
    ,
    reducers: {
        setExamSelected: (state, action) => {
            state.examSelected = action.payload

        },

        setExamCheckin: (state, action) => {
            state.examCheckin = action.payload;
        },
        writeAnswerSheet: (state, action) => {
            const { question, selected } = action.payload;

            state.answers.map(answer => {
                if (answer.stt === question) {
                    answer.selected = selected;
                    answer.status = 'selected';
                }
            })
        },

        setStatus: (state, action) => {
            state.answers[action.payload].status = 'yet';
        },
        setScrollId: (state, action) => {
            state.scrollId = action.payload;
        },
        setAnswerAfterRefresh: (state, action) => {
            state.answers = action.payload;
        },
        setMaxPartSelected: (state, action) => {
            if (action.payload.name === 'part3') {
                state.part3MaxPage = action.payload.amount;
            }

            if (action.payload.name === 'part4') {
                state.part4MaxPage = action.payload.amount;
            }

            if (action.payload.name === 'part6') {
                state.part6MaxPage = action.payload.amount;
            }

            if (action.payload.name === 'part7') {
                state.part7MaxPage = action.payload.amount;
            }

        },
        setsubPartSelected: (state, action) => {
            state.subPartSelected = action.payload;
        }
    },
    extraReducers: {

        [fetchBooks.fulfilled]: (state, action) => {
            state.setExam = action.payload;
            state.isLoading = false;
        },
        [fetchBooks.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchBooks.rejected]: (state, action) => {
        },

        [fetchExam.fulfilled]: (state, action) => {
            state.questions = action.payload;
            const { part3, part4, part6, part7 } = action.payload;
            state.part3MaxPage = part3.length - 1;
            state.part4MaxPage = part4.length - 1;
            state.part6MaxPage = part6.length - 1;
            state.part7MaxPage = part7.length - 1;
        },

        [fetchResult.fulfilled]: (state, action) => {
            state.result = action.payload;
        }

    }
});

const { reducer, actions } = examSlice;
export const { setExamSelected, setStatus, writeAnswerSheet, setsubPartSelected, setMaxPartSelected, setScrollId, setExamCheckin, setAnswerAfterRefresh } = actions;
export default reducer;