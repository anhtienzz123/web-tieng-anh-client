import { createSlice } from '@reduxjs/toolkit';
import image_exam from 'assets/image/toeic_exam.jpg';
import { answers } from 'constants/ToeicSheet';
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
    }
    ,
    reducers: {
        setExamSelected: (state, action) => {
            state.examSelected = action.payload
        }
    },
    extraReducers: {

    }
});

const { reducer, actions } = examSlice;
export const { setExamSelected } = actions;
export default reducer;