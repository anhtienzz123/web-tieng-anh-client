import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Image from 'constant/image';
import './style.scss';
Banner.propTypes = {

};

function Banner(props) {
    return (
        <div id='banner_wrapper'>



            <div className="banner">
                <div className="banner_overlay">
                    <div className="banner_container">
                        <Row>
                            <Col span={12} className="banner_left">
                                <div className="banner_left--title">We provide best IT solution</div>
                                <div className="banner_left--sub-title">Naxly bring the power of data science and artificial intelligence to every busines</div>
                                <button className="banner_left--button">Register Now !</button>
                            </Col>
                            <Col span={12} className="banner_right">
                                <div className="banner_right--img">
                                    <img src={Image.ICON_BACKGROUND} alt="icon" />
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Banner;