import React from 'react';
import PropTypes from 'prop-types';
import VideoCard from '../VideoCard';
import './style.scss';
import { PlayCircleOutlined } from '@ant-design/icons';
import BlockLevel from 'components/BlockLevel';
import { Link, Redirect } from 'react-router-dom';
VideoMoreCard.propTypes = {

};

function VideoMoreCard(props) {


    // const { durationString, level, duration, image, slug, name } = data;

    const data = [
        {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        },

        {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        },

        {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        },
        {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        }, {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        }, {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        }, {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        }, {
            durationString: '00:12',
            level: 1,
            image: 'https://image2.tienphong.vn/600x315/Uploaded/2021/qqc_wqdun/2020_08_24/ava_dephonmoingay2408_5_copy_LAGJ.jpg',
            name: 'Anh là ai - Phương Ly'
        }
    ]

    return (
        <>
            {
                data.map((element, index) => (
                    <div className='video-more_card'>
                        <div className='video-more_card-left'>
                            <div className="video-more_card_content">
                                <div className="video-more_card_content-image">
                                    <img src={element.image} alt="" />
                                </div>
                                <div className="video-more_card_content-overlay">
                                    <PlayCircleOutlined style={{ fontSize: '2.5rem' }} />
                                </div>

                                <div className="video-more_card_content-info">
                                    <BlockLevel level="3" width="25" height="25" fontsize='1rem' />

                                    <div className="video-more_card_content-info--duration">
                                        <div>
                                            {element.durationString}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='video-more_card-right'>
                            <Link to="/videos/art-culture" >
                                {element.name}
                            </Link>


                        </div>
                    </div >
                ))
            }
        </>

    );
}

export default VideoMoreCard;