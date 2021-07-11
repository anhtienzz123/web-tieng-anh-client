import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col, Slider } from 'antd';
ExamCard.propTypes = {
    listTest: PropTypes.array,
    onClickExam: PropTypes.func,
    idSetTest: PropTypes.string,
};

ExamCard.defaultProps = {
    listTest: [],
    onClickExam: null,
    idSetTest: "",
}



function ExamCard(props) {
    const { listTest, onClickExam, idSetTest } = props;

    function handleClick(test, idSetTest) {
        if (onClickExam) {
            onClickExam(test, idSetTest);
        }
    }
    return (
        <>
            {listTest.map((test, index) => (
                <Col span={6} key={test.id}>
                    <div className="exam_card" onClick={() => handleClick(test, idSetTest)}>
                        <div className="exam_card_count">
                            <span>{index + 1}</span>
                        </div>
                        <div className="exam_card_subject">
                            <div className="exam_card_subject--set">{test.subjectName}</div>
                            <div className="exam_card_subject--name">{test.nameTest}</div>
                        </div>
                    </div>
                </Col>
            ))}
        </>

    );
}

export default ExamCard;