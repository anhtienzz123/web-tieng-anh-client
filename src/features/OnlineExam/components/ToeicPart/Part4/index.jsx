import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMaxPartSelected } from 'features/OnlineExam/onlineExamSlice';
import LongPart from '../LongPart';
import ShortPart from '../ShortPart';


Part4.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    longAudio: PropTypes.string,
    name: PropTypes.string,
};

Part4.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    longAudio: null,
    name: ''
}

function Part4(props) {
    const { data, onAnswerSheetClick, longAudio, name } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        const object = { amount: data.length - 1, name: name };

        dispatch(setMaxPartSelected(object));
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

export default Part4;