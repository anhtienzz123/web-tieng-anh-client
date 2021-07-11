import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { PlayCircleOutlined } from '@ant-design/icons';
import Image from 'constant/image';
VideoCard.propTypes = {
    height: PropTypes.string,
};

VideoCard.defaultProps = {
    height: ''
}
// 650 350
function VideoCard(props) {
    const { height } = props;

    return (
        <div className='videocard'>

            <img className="videocard_img" style={{ height: height }} src={Image.TEST_VIDEO} alt="" />

            <div className="videocard_title">
                <span>Dậy sớm để thành công</span>
            </div>
            <div className="videocard_overlay">
                <div className='videocard_overlay--play'>
                    <PlayCircleOutlined />
                </div>

            </div>


        </div>
    );
}

export default VideoCard;