import { SoundTwoTone } from '@ant-design/icons';
import { setAudioPlay } from 'features/Video/videoSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';


AudioCustom.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string,
};

AudioCustom.defaultProps = {
    url: '',
    id: ''
}



function AudioCustom(props) {

    const { url, id } = props;
    const dispatch = useDispatch();
    const { audioPlay } = useSelector(state => state.video);
    const URL = 'https://toeicexamstore.xyz/upload/audiotoeic/part1875.mp3';
    console.log(id);

    const audio = id && document.getElementById(id);
    console.log(audio);
    // const { isPlay, setIsPlay } = useState(false);

    // dispatch(setAudioPlay(true));
    // setIsPlay(true);

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

            // audio.load();
            // audio.play();
        }

    }

    if (audio) {
        if (audioPlay === id || audioPlay === '') {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(_ => {
                        // Automatic playback started!
                        // Show playing UI.
                        console.log("audio played auto");
                    })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        console.log("playback prevented");
                    });
            }
            // audio.load();
            // audio.play();
        } else {
            audio.pause();
        }

    }

    return (
        <div className='audio-custom_wrapper'>
            <div onClick={handleOnClick}>
                <SoundTwoTone twoToneColor="#52c41a" style={{ fontSize: '2.2rem' }} />
            </div>


            <audio id={id} controls style={{ display: 'none' }}>
                <source src={url} type="audio/mpeg" />
            </audio>
        </div>

    );
}

export default AudioCustom;