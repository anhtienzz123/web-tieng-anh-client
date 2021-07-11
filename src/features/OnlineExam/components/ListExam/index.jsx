import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col, Slider } from 'antd';
import ExamCard from 'features/OnlineExam/components/ExamCard'
import { useHistory, useRouteMatch } from "react-router-dom";
ListExam.propTypes = {
    listExam: PropTypes.array
};

ListExam.defaultProps = {
    listExam: []
}



function ListExam(props) {
    const history = useHistory();
    const match = useRouteMatch();
    const { url } = match;

    function onClickExam(test, idSetTest) {
        console.log(test);
        history.push(`${url}/checkin/${idSetTest}/${test.id}`)
    }


    const { listExam } = props;
    console.log(listExam)

    return (

        <>
            {listExam.map(exam => (
                <div className='list_exam' key={exam.id}>
                    <div className="list_exam--head">
                        <div className='list_exam--head-img' >
                            <img src={exam.image_exam} alt="image_exam" />
                        </div>
                        <div className='list_exam--head-title'>
                            <span>{exam.subjectTest}</span>
                        </div>
                    </div>

                    <Row gutter={[16, 16]}>

                        <ExamCard listTest={exam.listTest} idSetTest={exam.id} onClickExam={onClickExam} />

                    </Row>

                </div>
            ))}

        </>

    );
}

export default ListExam;