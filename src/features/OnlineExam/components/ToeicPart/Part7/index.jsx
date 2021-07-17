import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMaxPartSelected } from 'features/OnlineExam/onlineExamSlice';
import ShortPart from '../ShortPart';

Part7.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    name: PropTypes.string,
};

Part7.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    name: ''
}

function Part7(props) {
    const { data, onAnswerSheetClick, name } = props;
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(setMaxPartSelected(data.length - 1));
        return () => {

        };
    }, []);

    return (
        <div id='top'>
            <ShortPart data={data} onAnswerSheetClick={onAnswerSheetClick} name={name} /> :
        </div>
    );
}

export default Part7;