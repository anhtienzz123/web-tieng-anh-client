import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col, Button } from 'antd';
import VideoCard from 'features/Home/components/VideoCard';
import { DownCircleOutlined } from '@ant-design/icons';
VideoRecommend.propTypes = {

};



function VideoRecommend(props) {
    const DEAULT_HEIGT_SUB_VIDEOCARD = '196px';

    return (
        <div className="video_recommend">
            <div className='video_recommend--info'>
                <span>Recommend Video</span>
                <span>Most viewed Video</span>
            </div>


            <Row gutter={[16, 16]}>
                <Col span={12} className="video_recommend_leftside">
                    <VideoCard />
                </Col>

                <Col span={12} className="video_recommend_rightside" >

                    <Row gutter={[16, 8]} className="video_recommend_rightside--sub">
                        <Col span={12} > <VideoCard height={DEAULT_HEIGT_SUB_VIDEOCARD} /></Col>
                        <Col span={12} > <VideoCard height={DEAULT_HEIGT_SUB_VIDEOCARD} /></Col>
                        <Col span={12} > <VideoCard height={DEAULT_HEIGT_SUB_VIDEOCARD} /></Col>
                        <Col span={12} > <VideoCard height={DEAULT_HEIGT_SUB_VIDEOCARD} /></Col>
                    </Row>


                </Col>

            </Row>

            <div className="video_recommend--button">
                <Button id="button" shape="round" type="primary" icon={<DownCircleOutlined />} size='large'>
                    More
                </Button>

            </div>


        </div>
    );
}

export default VideoRecommend;