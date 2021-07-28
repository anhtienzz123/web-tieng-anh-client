import React from 'react';
import PropTypes from 'prop-types';
import VideoMoreCard from '../VideoMoreCard';
import { Button } from 'antd';
import './style.scss';
MoreVideo.propTypes = {

};

function MoreVideo(props) {
    return (
        <div className='more_video_wrapper'>
            <div className='more_video_title' >
                More like this
            </div>

            <div className='more_video_list'>
                <VideoMoreCard />
            </div>

            <div className="more_video_button">
                <Button type="primary" size='large' block>
                    Show more
                </Button>
            </div>
        </div>
    );
}

export default MoreVideo;