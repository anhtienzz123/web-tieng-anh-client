import { SoundTwoTone } from '@ant-design/icons';
import { setAudioPlay } from 'features/Video/videoSlice';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';


AudioCustom.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number.isRequired,
};

AudioCustom.defaultProps = {
    url: '',
}



function AudioCustom(props) {

    const { url, id, onClick } = props;

    const handleClick = () => {

        if (!onClick)
            return;

        onClick(url);


    }

    return (
        <div className='audio-custom_wrapper' style={{ cursor: 'pointer' }}>
            <div onClick={handleClick}>
                <SoundTwoTone twoToneColor="#52c41a" style={{ fontSize: '2.2rem' }} />
            </div>
        </div>

    );
}

export default AudioCustom;