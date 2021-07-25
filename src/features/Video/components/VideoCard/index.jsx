import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { PlayCircleOutlined } from '@ant-design/icons';
import BlockLevel from 'components/BlockLevel';
VideoCard.propTypes = {
    data: PropTypes.object,
    height: PropTypes.string,
    padding: PropTypes.string,
};

VideoCard.defaultProps = {
    data: {},
    height: '',
    padding: ''
};


function VideoCard(props) {
    const { data, height, padding } = props;
    const { durationString, level, duration, image, slug, name, id } = data;

    let noneRadius = height !== '' ? '0px' : '';

    const styleSlider = {
        flexDirection: "column",
        justifyContent: "flex-start"
    };


    return (
        <div className='wrapper' style={{ paddingRight: padding }}>
            <div className="video_card" style={{ borderRadius: noneRadius }}>

                <div className="video_card_img" style={{ borderRadius: noneRadius }}>
                    <img
                        src={image}
                        alt="error image"
                        style={{ height: height }}

                    />

                    <div className="video_card_img--info" style={height !== '' ? styleSlider : {}}>
                        <div className="video_card_img--info-level">
                            <BlockLevel level={level && level.toString()} width='40' height='30' />
                        </div>


                        {height !== '' ?
                            <div className="video_card_title" style={{ fontSize: '2rem', textAlign: 'start' }} >
                                {name}
                            </div>
                            : ''
                        }
                        {height === '' ?
                            <div className="video_card_img--info-duration">
                                <div>{durationString}</div>
                            </div>
                            : ''
                        }
                    </div>
                </div>


                <div className="video_card_overlay" style={{ borderRadius: noneRadius }}>
                    <div className="video_card_overlay--btn" >
                        <PlayCircleOutlined style={{ fontSize: '5rem' }} />
                    </div>
                </div>



            </div>

            {
                height == '' ?
                    <div className="video_card_title" >
                        {name}
                    </div>
                    : ''
            }



        </div >
    );
}

export default VideoCard;