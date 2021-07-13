import { createSlice } from '@reduxjs/toolkit';
import image_exam from 'assets/image/toeic_exam.jpg';
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

const answers = [
    {
        stt: 1,
        selected: '',
        status: '',
    },
    {
        stt: 2,
        selected: '',
        status: '',
    },
    {
        stt: 3,
        selected: '',
        status: '',
    },
    {
        stt: 4,
        selected: '',
        status: '',
    },
    {
        stt: 5,
        selected: '',
        status: '',
    },
    {
        stt: 6,
        selected: '',
        status: '',
    },
    {
        stt: 7,
        selected: '',
        status: '',
    },
    {
        stt: 8,
        selected: '',
        status: '',
    },
    {
        stt: 9,
        selected: '',
        status: '',
    },
    {
        stt: 10,
        selected: '',
        status: '',
    }, {
        stt: 11,
        selected: '',
        status: '',
    },
    {
        stt: 12,
        selected: '',
        status: '',
    },
    {
        stt: 13,
        selected: '',
        status: '',
    },
    {
        stt: 14,
        selected: '',
        status: '',
    },
    {
        stt: 15,
        selected: '',
        status: '',
    },
    {
        stt: 16,
        selected: '',
        status: '',
    },
    {
        stt: 17,
        selected: '',
        status: '',
    },
    {
        stt: 18,
        selected: '',
        status: '',
    },
    {
        stt: 19,
        selected: '',
        status: '',
    },
    {
        stt: 20,
        selected: '',
        status: '',
    }, {
        stt: 21,
        selected: '',
        status: '',
    },
    {
        stt: 22,
        selected: '',
        status: '',
    },
    {
        stt: 23,
        selected: '',
        status: '',
    },
    {
        stt: 24,
        selected: '',
        status: '',
    },
    {
        stt: 25,
        selected: '',
        status: '',
    },
    {
        stt: 26,
        selected: '',
        status: '',
    },
    {
        stt: 27,
        selected: '',
        status: '',
    },
    {
        stt: 28,
        selected: '',
        status: '',
    },
    {
        stt: 29,
        selected: '',
        status: '',
    },
    {
        stt: 30,
        selected: '',
        status: '',
    }, {
        stt: 321,
        selected: '',
        status: '',
    },
    {
        stt: 32,
        selected: '',
        status: '',
    },
    {
        stt: 33,
        selected: '',
        status: '',
    },
    {
        stt: 34,
        selected: '',
        status: '',
    },
    {
        stt: 35,
        selected: '',
        status: '',
    },
    {
        stt: 36,
        selected: '',
        status: '',
    },
    {
        stt: 37,
        selected: '',
        status: '',
    },
    {
        stt: 38,
        selected: '',
        status: '',
    },
    {
        stt: 39,
        selected: '',
        status: '',
    },
    {
        stt: 40,
        selected: '',
        status: '',
    }, {
        stt: 41,
        selected: '',
        status: '',
    },
    {
        stt: 42,
        selected: '',
        status: '',
    },
    {
        stt: 43,
        selected: '',
        status: '',
    },
    {
        stt: 44,
        selected: '',
        status: '',
    },
    {
        stt: 45,
        selected: '',
        status: '',
    },
    {
        stt: 46,
        selected: '',
        status: '',
    },
    {
        stt: 47,
        selected: '',
        status: '',
    },
    {
        stt: 48,
        selected: '',
        status: '',
    },
    {
        stt: 49,
        selected: '',
        status: '',
    },
    {
        stt: 50,
        selected: '',
        status: '',
    }, {
        stt: 51,
        selected: '',
        status: '',
    },
    {
        stt: 52,
        selected: '',
        status: '',
    },
    {
        stt: 53,
        selected: '',
        status: '',
    },
    {
        stt: 54,
        selected: '',
        status: '',
    },
    {
        stt: 55,
        selected: '',
        status: '',
    },
    {
        stt: 56,
        selected: '',
        status: '',
    },
    {
        stt: 57,
        selected: '',
        status: '',
    },
    {
        stt: 58,
        selected: '',
        status: '',
    },
    {
        stt: 59,
        selected: '',
        status: '',
    },
    {
        stt: 60,
        selected: '',
        status: '',
    }, {
        stt: 61,
        selected: '',
        status: '',
    },
    {
        stt: 62,
        selected: '',
        status: '',
    },
    {
        stt: 63,
        selected: '',
        status: '',
    },
    {
        stt: 64,
        selected: '',
        status: '',
    },
    {
        stt: 65,
        selected: '',
        status: '',
    },
    {
        stt: 66,
        selected: '',
        status: '',
    },
    {
        stt: 67,
        selected: '',
        status: '',
    },
    {
        stt: 68,
        selected: '',
        status: '',
    },
    {
        stt: 69,
        selected: '',
        status: '',
    },
    {
        stt: 70,
        selected: '',
        status: '',
    }, {
        stt: 71,
        selected: '',
        status: '',
    },
    {
        stt: 72,
        selected: '',
        status: '',
    },
    {
        stt: 73,
        selected: '',
        status: '',
    },
    {
        stt: 74,
        selected: '',
        status: '',
    },
    {
        stt: 75,
        selected: '',
        status: '',
    },
    {
        stt: 76,
        selected: '',
        status: '',
    },
    {
        stt: 77,
        selected: '',
        status: '',
    },
    {
        stt: 78,
        selected: '',
        status: '',
    },
    {
        stt: 79,
        selected: '',
        status: '',
    },
    {
        stt: 80,
        selected: '',
        status: '',
    },
    {
        stt: 81,
        selected: '',
        status: '',
    },
    {
        stt: 82,
        selected: '',
        status: '',
    },
    {
        stt: 83,
        selected: '',
        status: '',
    },
    {
        stt: 84,
        selected: '',
        status: '',
    },
    {
        stt: 85,
        selected: '',
        status: '',
    },
    {
        stt: 86,
        selected: '',
        status: '',
    },
    {
        stt: 87,
        selected: '',
        status: '',
    },
    {
        stt: 88,
        selected: '',
        status: '',
    },
    {
        stt: 89,
        selected: '',
        status: '',
    },
    {
        stt: 91,
        selected: '',
        status: '',
    }, {
        stt: 91,
        selected: '',
        status: '',
    },
    {
        stt: 92,
        selected: '',
        status: '',
    },
    {
        stt: 93,
        selected: '',
        status: '',
    },
    {
        stt: 94,
        selected: '',
        status: '',
    },
    {
        stt: 95,
        selected: '',
        status: '',
    },
    {
        stt: 96,
        selected: '',
        status: '',
    },
    {
        stt: 97,
        selected: '',
        status: '',
    },
    {
        stt: 98,
        selected: '',
        status: '',
    },
    {
        stt: 99,
        selected: '',
        status: '',
    },
    {
        stt: 100,
        selected: '',
        status: '',
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