import { PlayCircleOutlined } from '@ant-design/icons';
import DefaultImage from 'assets/images/default_img.jpg';
import BlockLevel from 'components/BlockLevel';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.scss';
VideoMoreSubCard.propTypes = {
    data: PropTypes.object,
};

VideoMoreSubCard.defaultProps = {
    dataL: {}
}

function VideoMoreSubCard(props) {
    const { data } = props;
    const { slugVideo, slugCategory } = useParams();



    const [checkImage, setCheckImage] = useState(true);


    const handleError = () => {
        setCheckImage(false);

    }
    return (
        <div className='video-more_card'>
            <div className='video-more_card-left'>
                <div className="video-more_card_content">
                    <div className="video-more_card_content-image">
                        <img
                            id='img'
                            src={checkImage ? data.image : DefaultImage}
                            // src={data.image}
                            alt="error image"
                            onError={handleError}
                        />
                    </div>
                    <div className="video-more_card_content-overlay">
                        <PlayCircleOutlined style={{ fontSize: '2.5rem' }} />
                    </div>

                    <div className="video-more_card_content-info">
                        <BlockLevel level="3" width="25" height="25" fontsize='1rem' />

                        <div className="video-more_card_content-info--duration">
                            <div>
                                {data.durationString}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='video-more_card-right'>
                <Link to={"/videos/" + slugCategory + "/" + slugVideo} >
                    {data.name}
                </Link>


            </div>
        </div >
    );
}

export default VideoMoreSubCard;