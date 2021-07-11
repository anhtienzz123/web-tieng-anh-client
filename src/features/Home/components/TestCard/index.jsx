import React from 'react';
import PropTypes from 'prop-types';
import Image from 'constant/image';
import './style.scss'
import { Row, Col, Slider } from 'antd';
TestCard.propTypes = {
    test: PropTypes.object,
};

TestCard.defaultProps = {
    test: {}
}

function TestCard(props) {
    const { test } = props;
    const { id, img, titleSetTest, titleTest, view } = test;

    return (



        <Col span={6} >
            <div div className='testcard' >

                <div className="testcard_img">
                    <img src={img} alt="image" />
                    <div className="testcard_overlay" />
                </div>


                <div className='testcard_info'>
                    <div className='testcard_info--title'>
                        <span>{titleTest} - {titleSetTest}</span>
                    </div>
                    <div className='testcard_info--view'>
                        <span>view</span>
                    </div>
                </div>

            </div >
        </Col>





    );
}

export default TestCard;