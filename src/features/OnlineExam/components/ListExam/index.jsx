import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col, Slider } from 'antd';
import ExamCard from 'features/OnlineExam/components/ExamCard'
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setExamSelected } from 'features/OnlineExam/onlineExamSlice';
ListExam.propTypes = {
    examList: PropTypes.array
};

ListExam.defaultProps = {
    examList: []
}



function ListExam(props) {
    const history = useHistory();
    const dispatch = useDispatch();


    function handleClick(test) {
        dispatch(setExamSelected(test.name));
        history.push(`/exams/${test.slug}/checkin`)
    }


    const { examList } = props;
    console.log(examList);

    return (

        <>
            {examList.map((exam, index) => (
                <div className='list_exam' key={index}>
                    <div className="list_exam--head">
                        <div className='list_exam--head-img' >
                            <img src={exam.image} alt="image_exam" />
                        </div>
                        <div className='list_exam--head-title'>
                            <span>{exam.name}</span>
                        </div>
                    </div>

                    <Row gutter={[16, 16]}>

                        <ExamCard listTest={exam.tests} onClick={handleClick} />

                    </Row>

                </div>
            ))}

        </>

    );
}

export default ListExam;