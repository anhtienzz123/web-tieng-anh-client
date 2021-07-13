import React from 'react';
import PropTypes from 'prop-types';
import Timer from 'features/OnlineExam/components/Timer';
import ListQuestion from 'features/OnlineExam/components/ListQuestion';
import AnswerSheet from 'features/OnlineExam/components/AnswerSheet';
import { Row, Col, Slider } from 'antd';

import './style.scss'

Examining.propTypes = {

};

function Examining(props) {
    return (
        <div className='examining'>

            <Row gutter={[16, 16]}>
                <Col span={24} >
                    <Timer />
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={18} >
                    <ListQuestion />
                </Col>
                <Col span={6} >
                    <AnswerSheet />
                </Col>
            </Row>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />




        </div>
    );
}

export default Examining;