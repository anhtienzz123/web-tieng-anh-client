import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Slider } from 'antd';
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

    return (
        <div className='sub_answer'>
            <span>{title}</span>
            <br />
            <a href="#">Instruction</a>
            <Row gutter={[8, 8]}>
                {data.map((sub, index) => (
                    <Col span={4} key={index}>
                        <div className='sub_answer--block'>
                            {sub.stt}
                        </div>
                    </Col>
                ))}

            </Row>
        </div>
    );
}

export default SubAnswer;