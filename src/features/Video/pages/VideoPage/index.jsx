import { Col, Row, Space } from 'antd';
import AutoTranscript from 'features/Video/components/AutoTranscript';
import MoreVideo from 'features/Video/components/MoreVideo';
import VideoInfo from 'features/Video/components/VideoInfo';
import VideoPlayer from 'features/Video/components/VideoPlayer';
import { fetchVideo } from 'features/Video/videoSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.scss';

VideoPage.propTypes = {

};

function VideoPage(props) {
    const { slugCategory, slugVideo } = useParams();
    const { video } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideo({
            slug: slugVideo
        }));

    }, [slugVideo]);

    useEffect(() => {
        document.getElementById('top').scrollIntoView();
    }, [slugVideo]);


    return (
        <div className='videopage_background' id='top'>
            <div className="videopage_wrapper">

                <Space direction="vertical" size='large' style={{ width: '100%' }}>
                    <div className="videopage_top">
                        <Row gutter={[16, 8]}>
                            <Col span={16}>
                                <VideoPlayer url={video.url} />
                            </Col>
                            <Col span={8} >
                                <AutoTranscript subtitles={video.subtitles} />
                            </Col>

                        </Row>
                    </div>

                    <div className="videopage_bottom">
                        <Row gutter={[16, 8]}>
                            <Col span={16}>
                                <VideoInfo
                                    slugCategory={slugCategory}
                                    videoWords={video.videoWords}
                                    name={video.name}
                                    description={video.description}
                                    level={video.level}
                                    categoryName={video.categoryName}
                                />

                            </Col>
                            <Col span={8} >
                                <MoreVideo />
                            </Col>

                        </Row>
                    </div>

                </Space>






            </div>
        </div>

    );
}

export default VideoPage;