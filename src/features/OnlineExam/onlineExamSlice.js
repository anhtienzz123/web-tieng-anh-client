import { createSlice } from '@reduxjs/toolkit';
import image_exam from 'assets/image/toeic_exam.jpg';
import { answers } from 'constants/ToeicSheet';
import { test } from 'constants/ToeicQuestion';
import testExam from 'constants/QuestionTemp';
const KEY = 'exam';
const tests = [

    {
        slug: 1,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 2,
        name: "ETS 2020 - Test 03",


    },
    {
        slug: 3,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 4,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 5,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 6,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 7,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 8,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 9,
        name: "ETS 2020 - Test 03",

    },
    {
        slug: 10,
        name: "ETS 2020 - Test 030",

    },
];



const subjectTest = 'ETS 2020';
const examSlice = createSlice({
    name: KEY,
    initialState: {
        setExam: [
            {
                tests: tests,
                name: subjectTest,
                image: image_exam
            },
            {

                tests: tests,
                name: subjectTest,
                image: image_exam
            }
        ],
        examSelected: '',
        answers: answers,
        questions: testExam,
        examCheckin: '',
        scrollId: 'top',
        subPartSelected: 0,
        part3MaxPage: 12,
        part4MaxPage: 9,
        part6MaxPage: 3,
        part7MaxPage: 14,
        oldPart: 0
    }
    ,
    reducers: {
        setExamSelected: (state, action) => {
            let oldPart = state.examSelected;
            state.examSelected = action.payload
            state.oldPart = oldPart;
            // if (state.examSelected < oldPart) {
            //     state.subPartSelected = 0;
            // }
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

    }
});

const { reducer, actions } = examSlice;
export const { setExamSelected, writeAnswerSheet, setsubPartSelected, setMaxPartSelected, setScrollId, setExamCheckin, setAnswerAfterRefresh } = actions;
export default reducer;