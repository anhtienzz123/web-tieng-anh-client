import { CheckSquareTwoTone, CloseSquareTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExamSelected, setScrollId } from 'features/OnlineExam/onlineExamSlice';
import './style.scss';

SubAnswer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};
SubAnswer.defaultProps = {
    title: '',
    data: []
}

function SubAnswer(props) {
    const { title, data } = props;
    const dispatch = useDispatch();

    function handleOnClick(stt, e) {
        e.preventDefault();
        if (stt <= 6) {
            dispatch(setExamSelected(1));
        } else if (stt <= 31) {
            dispatch(setExamSelected(2));

        } else if (stt <= 70) {
            dispatch(setExamSelected(3));

        } else if (stt <= 100) {
            dispatch(setExamSelected(4));

        } else if (stt <= 130) {
            dispatch(setExamSelected(5));

        } else if (stt <= 146) {
            dispatch(setExamSelected(6));

        } else {
            dispatch(setExamSelected(7));
        };
        dispatch(setScrollId(stt));

    }

    return (
        <div className='sub_answer'>
            <span>{title}</span>
            <br />
            <a href="#">Instruction</a>
            <Row gutter={[8, 8]}>
                {data.map((sub, index) => (
                    <Col span={3} key={index}>


                        <a href={`#${sub.stt}`} onClick={(e) => handleOnClick(sub.stt, e)}>
                            <div className='sub_answer--block' >
                                <div className='sub_answer--status'>
                                    {sub.status == 'selected' && <CheckSquareTwoTone />}
                                    {sub.status == 'yet' && <CloseSquareTwoTone twoToneColor="#eb2f96" />}
                                </div>
                                {sub.stt}
                            </div>
                        </a>

                    </Col>
                ))}

            </Row>
        </div>
    );
}

export default SubAnswer;