import { SoundTwoTone } from '@ant-design/icons';
import { setAudioPlay } from 'features/Video/videoSlice';
import PropTypes from 'prop-types';
import React from 'react';
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

    const { url, id } = props;
    const dispatch = useDispatch();
    const { audioPlay } = useSelector(state => state.video);


    const audio = new Audio(url);

    function handleOnClick(e) {

        dispatch(setAudioPlay(id));
        
        if (id === audioPlay) {
            audio.load();
            var playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }

            // audio.play();
            // audio.load();
        }

    }


    if (audioPlay === id) {
        audio.load();
        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
        }

        // audio.load();
        // audio.play();
    } else {
        audio.pause();
    }





    return (
        <div className='audio-custom_wrapper' style={{ cursor: 'pointer' }}>
            <div onClick={handleOnClick}>
                <SoundTwoTone twoToneColor="#52c41a" style={{ fontSize: '2.2rem' }} />
            </div>


        </div>

    );
}

export default AudioCustom;