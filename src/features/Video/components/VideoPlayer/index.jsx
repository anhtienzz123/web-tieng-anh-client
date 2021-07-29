import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';
import './style.scss';
import PropTypes from 'prop-types';



VideoPlayer.propTypes = {
    url: PropTypes.string,
};

VideoPlayer.defaultProps = {
    url: ''
}


function VideoPlayer(props) {
    const { url } = props;
    return (
        <div className='video-player_wrapper'>

            <Space direction="vertical" style={{ width: '100%' }}>
                <div>
                    <ReactPlayer className='player-demension'
                        url={url}
                        width='100%'
                        controls={true}
                        playing={false}
                        height='440px'

                    />
                </div>


                <div className='video-player_sub'>

                    <div className="video-player_sub--previous video-player_sub-flex">
                        <div className="icon " >
                            <StepBackwardOutlined />
                        </div>
                    </div>

                    <div className="video-player_sub--content video-player_sub-flex ">
                        Don't be afraid to play with the palette and create your own unique interpretation.

                    </div>

                    <div className="video-player_sub--next video-player_sub-flex ">
                        <div className="icon">
                            <StepForwardOutlined />
                        </div>
                    </div>

                </div>
            </Space>



        </div>
    );
}

export default VideoPlayer;