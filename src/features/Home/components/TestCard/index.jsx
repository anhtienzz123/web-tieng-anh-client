import React from 'react';
import PropTypes from 'prop-types';
import Image from 'constant/image';
import './style.scss'
import { Row, Col, Slider } from 'antd';
TestCard.propTypes = {

};

function TestCard(props) {
    return (


        <div className='testcard'>

            <div className="testcard_img">
                <img src={Image.TEST_CARD} alt="" />
                <div className="testcard_overlay" />
            </div>


            <div className='testcard_info'>
                <div className='testcard_info--title'>
                    <span>ETS 2021 - TEST 3</span>
                </div>
                <div className='testcard_info--view'>
                    <span>500</span>
                </div>
            </div>

        </div>



    );
}

export default TestCard;