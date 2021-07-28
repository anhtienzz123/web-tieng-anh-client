import { Col, Row, Space } from 'antd';
import AudioCustom from 'features/Video/components/AudioCustom';
import AutoTranscript from 'features/Video/components/AutoTranscript';
import MoreVideo from 'features/Video/components/MoreVideo';
import VideoInfo from 'features/Video/components/VideoInfo';
import VideoPlayer from 'features/Video/components/VideoPlayer';
import React from 'react';
import './style.scss';
VideoPage.propTypes = {

};

function VideoPage(props) {
    return (
        <div className='videopage_background'>
            <div className="videopage_wrapper">
                <div className="videopage_top">
                    <Row gutter={[16, 8]}>
                        <Col span={16}>
                            <VideoPlayer />
                        </Col>
                        <Col span={8} >
                            <AutoTranscript />
                        </Col>

                    </Row>
                </div>


                <div className="videopage_bottom">
                    <Row gutter={[16, 8]}>
                        <Col span={16}>
                            <VideoInfo />

                        </Col>
                        <Col span={8} >
                            <MoreVideo />
                        </Col>

                    </Row>
                </div>


            </div>
        </div>

    );
}

export default VideoPage;