import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import LongPart from '../LongPart';
import ShortPart from '../ShortPart';
import { setMaxPartSelected } from 'features/OnlineExam/onlineExamSlice';
import { useEffect } from 'react';

Part3.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    longAudio: PropTypes.string
};

Part3.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    longAudio: null
}

function Part3(props) {
    const { data, onAnswerSheetClick, longAudio } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(setMaxPartSelected(data.length - 1));
        return () => {
           
        };
    }, []);
    let flag = 0;

    data.forEach(element => {
        if (element.paragraph !== null && element.paragraph != '') {
            flag += 1;
        }
    });

    let checkShortAudio = data.length / flag;
    let typePart = checkShortAudio == 1 ? 'short' : 'long';



    return (
        <div id='top'>

            {typePart == 'short' ?
                <ShortPart data={data} onAnswerSheetClick={onAnswerSheetClick} /> :
                <LongPart data={data} longAudio={longAudio} onAnswerSheetClick={onAnswerSheetClick} />
            }




        </div>
    );
}

export default Part3;