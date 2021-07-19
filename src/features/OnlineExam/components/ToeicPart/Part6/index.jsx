import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMaxPartSelected } from 'features/OnlineExam/onlineExamSlice';
import ShortPart from '../ShortPart';

Part6.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    name: PropTypes.string,
};

Part6.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    name: ''
}

function Part6(props) {
    const { data, onAnswerSheetClick, name } = props;
    console.log("check data part 6",data);

    return (
        <div id='top'>
            <ShortPart data={data} onAnswerSheetClick={onAnswerSheetClick} name={name} /> :
        </div>
    );
}

export default Part6;