import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import Image from 'constant/image';
VideoCard.propTypes = {
    height: PropTypes.string,
    video: PropTypes.object,
};

VideoCard.defaultProps = {
    height: '',
    video: {}
}
// 650 350
function VideoCard(props) {
    const { height, video } = props;
    const { thumbnail, titleVideo, view } = video;

    return (
        <>
            {height ? <Col span={12} >

                <div className='videocard'>

                    <img className="videocard_img" style={{ height: height }} src={thumbnail} alt="image" />

                    <div className="videocard_title">
                        <span>{titleVideo}</span>
                    </div>
                    <div className="videocard_overlay">
                        <div className='videocard_overlay--play'>
                            <PlayCircleOutlined />
                        </div>

                    </div>


                </div>
            </Col> :
                <div className='videocard'>

                    <img className="videocard_img" style={{ height: height }} src={thumbnail} alt="image" />

                    <div className="videocard_title">
                        <span>{titleVideo}</span>
                    </div>
                    <div className="videocard_overlay">
                        <div className='videocard_overlay--play'>
                            <PlayCircleOutlined />
                        </div>

                    </div>


                </div>

            }
        </>




    );
}

export default VideoCard;