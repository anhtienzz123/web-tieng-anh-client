import { createSlice } from '@reduxjs/toolkit';
import image_exam from 'assets/image/toeic_exam.jpg';
const KEY = 'exam';
const listTest = [

    {
        id: 1,
        nameTest: "Test 1",
        subjectName: 'ETS 2020'
    },
    {
        id: 2,
        nameTest: "Test 2",
        subjectName: 'ETS 2020'
    },
    {
        id: 3,
        nameTest: "Test 3",
        subjectName: 'ETS 2020'
    },
    {
        id: 4,
        nameTest: "Test 4",
        subjectName: 'ETS 2020'
    },
    {
        id: 5,
        nameTest: "Test 5",
        subjectName: 'ETS 2020'
    },
    {
        id: 6,
        nameTest: "Test 6",
        subjectName: 'ETS 2020'
    },
    {
        id: 7,
        nameTest: "Test 7",
        subjectName: 'ETS 2020'
    },
    {
        id: 8,
        nameTest: "Test 8",
        subjectName: 'ETS 2020'
    },
    {
        id: 9,
        nameTest: "Test 9",
        subjectName: 'ETS 2020'
    },
    {
        id: 10,
        nameTest: "Test 10",
        subjectName: 'ETS 2020'
    },
];
const subjectTest = 'ETS 2020';
const examSlice = createSlice({
    name: KEY,
    initialState: [
        {
            id: 1,
            listTest: listTest,
            subjectTest: subjectTest,
            image_exam: image_exam
        },
        {
            id: 2,
            listTest: listTest,
            subjectTest: subjectTest,
            image_exam: image_exam
        }

    ],
    reducers: {

    },
    extraReducers: {

    }
});

const { reducer, actions } = examSlice;
export default reducer;