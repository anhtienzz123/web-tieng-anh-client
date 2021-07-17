import { setMaxPartSelected } from 'features/OnlineExam/onlineExamSlice';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LongPart from '../LongPart';
import ShortPart from '../ShortPart';
import useWindowUnloadEffect from 'utils/useWindowUnloadEffect';

Part3.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    longAudio: PropTypes.string,
    name: PropTypes.string,
};

Part3.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    longAudio: null,
    name: ''
}

function Part3(props) {
    const { data, onAnswerSheetClick, longAudio, name } = props;
    const dispatch = useDispatch();


    let flag = 0;

    data.forEach(element => {
        if (element.paragraph !== null && element.paragraph != '') {
            flag += 1;
        }
    });

    let checkShortAudio = data.length / flag;
    let typePart = checkShortAudio == 1 ? 'short' : 'long';

    const saveLocal = data.length - 1
    useWindowUnloadEffect(() => {
        localStorage.setItem('maxPartSelected', saveLocal);

    }, true);




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