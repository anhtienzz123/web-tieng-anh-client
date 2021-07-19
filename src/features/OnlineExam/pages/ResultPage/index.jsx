import { fetchResult } from 'features/OnlineExam/onlineExamSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleAnswer } from 'utils/handleDataAnswer';
ResultPage.propTypes = {

};





function ResultPage(props) {

    const { testId } = useParams();
    const dispatch = useDispatch();
    const { answers } = useSelector(state => state.exam);
    const answerToPost = handleAnswer(answers);
    useEffect(() => {

        dispatch(fetchResult({
            slug: testId,
            answers: answerToPost,

        }))
    }, []);



    return (
        <div>
            Result page
        </div>
    );
}

export default ResultPage;