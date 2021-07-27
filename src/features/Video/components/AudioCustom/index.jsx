import { SoundTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioPlay } from 'features/Video/videoSlice';



AudioCustom.propTypes = {

};



function AudioCustom(props) {

    const { url, id } = props;
    const dispatch = useDispatch();
    const { audioPlay } = useSelector(state => state.video);
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
            audio.play();
        }

    }

    if (audio) {
        if (audioPlay === id || audioPlay === '') {
            audio.load();
            audio.play();
        } else {
            audio.pause();
        }

    }

    return (
        <>
            <div onClick={handleOnClick}>
                <SoundTwoTone twoToneColor="#52c41a" style={{ fontSize: '2.2rem' }} />
            </div>


            <audio id={id} controls style={{ display: 'none' }}>
                <source src={url} type="audio/mpeg" />
            </audio>
        </>

    );
}

export default AudioCustom;