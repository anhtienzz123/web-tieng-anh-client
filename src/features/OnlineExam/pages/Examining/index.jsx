import { Col, Row } from 'antd';
import AnswerSheet from 'features/OnlineExam/components/AnswerSheet';
import Timer from 'features/OnlineExam/components/Timer';
import ToeicPart from 'features/OnlineExam/components/ToeicPart';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';




function Examining(props) {
    const { isSubmit } = useSelector(state => state.exam)


    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24} >
                    {isSubmit ? '' : <Timer />}
                </Col>
            </Row>
            <div className='examining'>
                <Row gutter={[16, 16]}>
                    <Col span={17} >
                        <ToeicPart />

                    </Col>
                    <Col span={7} >
                        <AnswerSheet />
                    </Col>
                </Row>

            </div>

        </>
    );
}

export default Examining;