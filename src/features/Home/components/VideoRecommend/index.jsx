import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col, Button } from 'antd';
import VideoCard from 'features/Home/components/VideoCard';
import { DownCircleOutlined } from '@ant-design/icons';
VideoRecommend.propTypes = {
    listVideoRecommend: PropTypes.array,
};

VideoRecommend.defaultProps = {
    listVideoRecommend: [],
}



function VideoRecommend(props) {


    const { listVideoRecommend } = props
    const DEAULT_HEIGT_SUB_VIDEOCARD = '196px';
    const listVideoRecommendSub = listVideoRecommend.filter((video, index) => index !== 0);


    console.log("check video", listVideoRecommendSub);

    return (
        <div className="video_recommend">
            <div className='video_recommend--info'>
                <span>Recommend Video</span>
                <span>Most viewed Video</span>
            </div>


            <Row gutter={[16, 16]}>
                <Col span={12} className="video_recommend_leftside">
                    <VideoCard video={listVideoRecommend[0]} />
                </Col>

                <Col span={12} className="video_recommend_rightside" >

                    <Row gutter={[16, 8]} className="video_recommend_rightside--sub">
                        {/* <Col span={12} > <VideoCard height={DEAULT_HEIGT_SUB_VIDEOCARD} /></Col> */}
                        {listVideoRecommendSub.map(video => (
                            <VideoCard video={video} height={DEAULT_HEIGT_SUB_VIDEOCARD} />
                        ))}
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