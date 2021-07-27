import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';
import './style.scss';
VideoPlayer.propTypes = {

};


function VideoPlayer(props) {
    const URL = "https://cdna.englishcentral.com/dialogs/26313/videoh264_26313_20160425161528.mp4";
    return (
        <div className='video-player_wrapper'>

            <Space direction="vertical" style={{ width: '100%' }}>
                <div>
                    <ReactPlayer className='player-demension'
                        url={URL}
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