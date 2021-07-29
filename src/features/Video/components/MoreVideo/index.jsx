import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VideoMoreCard from '../VideoMoreCard';
import { Button } from 'antd';
import './style.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreVideo, setShowMore } from 'features/Video/videoSlice';
import DefaultImage from 'assets/images/default_img.jpg';
MoreVideo.propTypes = {

};

function MoreVideo(props) {
    const { slugCategory } = useParams();
    const { more, showMore } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    const checkShow = showMore ? 20 : 3;


    useEffect(() => {
        dispatch(fetchMoreVideo({
            slug: slugCategory,
            size: checkShow
        }))
    }, [slugCategory, checkShow]);


    const handleShowVideo = (e) => {
        dispatch(setShowMore())
    }


   
 

    console.log(DefaultImage)
    return (
        <div className='more_video_wrapper'>
            <div className='more_video_title' >
                More like this
            </div>

            <div className='more_video_list'>
                <VideoMoreCard />
            </div>

            <div className="more_video_button">
                <Button type="primary" size='large' block onClick={handleShowVideo}>
                    {showMore ? 'Hide' : 'Show more'}
                </Button>
            </div>
        </div>
    );
}

export default MoreVideo;