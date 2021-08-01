import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './style.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setSubActive, setSttInSub, setIsPlay, setSeekTo } from 'features/Video/videoSlice';



VideoPlayer.propTypes = {
    url: PropTypes.string,
};

VideoPlayer.defaultProps = {
    url: ''
}


function VideoPlayer(props) {
    const { transcript, seekTo, isPlay, scriptPanes, sttInSub } = useSelector((state) => state.video);
    const dispatch = useDispatch();

    const { url } = props;
    let player = {};

    const setRef = (rs) => {
        player = rs;
    }


    useEffect(() => {
        console.log('seek to', seekTo);
        player.seekTo(Math.ceil(seekTo));
    }, [seekTo]);


    function handleOnProgress(state) {
        const { playedSeconds } = state;
        const tempSecond = playedSeconds;
        console.log('time player', tempSecond);



        if (isPlay) {
            const subSelected = transcript.find((sub, index) => {
                const { start, end } = sub;
                console.log('start ' + index, start);
                console.log('end ' + index, end);
                return tempSecond * 1000 >= start && tempSecond * 1000 < end;
            });



            if (subSelected) {
                dispatch(setSubActive(subSelected.id));
                dispatch(setSttInSub(subSelected.stt));
                console.log("time auto", subSelected.start)
                console.log("==============================")
            }
        }

    }





    const handlePreviousPane = () => {
        if (sttInSub === '') {
            return;
        }

        if (sttInSub === 0) {
            return;
        }

        let temp = sttInSub - 1;
        let tempScript = transcript.find(x => x.stt === temp);
        let timeTemp = Math.trunc(tempScript.start / 1000);
        dispatch(setSttInSub(temp));
        dispatch(setSeekTo(timeTemp));
        dispatch(setSubActive(tempScript.id))



    }


    const handleNextPane = () => {
        if (sttInSub === '') {
            let tempScript = transcript.find(x => x.stt === 0);
            let timeTemp = Math.trunc(tempScript.start / 1000);


            dispatch(setSttInSub(0));
            dispatch(setSeekTo(timeTemp));
            dispatch(setSubActive(tempScript.id));

            return;
        }

        let temp = sttInSub + 1;
        if (temp <= transcript.length) {
            let tempScript = transcript.find(x => x.stt === temp);

            if (tempScript) {
                let timeTemp = Math.trunc(tempScript.start / 1000);
                dispatch(setSttInSub(temp));
                dispatch(setSeekTo(timeTemp));
                dispatch(setSubActive(tempScript.id));

                return;
            }

        }
    }

    const handleOnStart = () => {
        dispatch(setIsPlay(true));
    }

    const handleOnPause = () => {
        dispatch(setIsPlay(false));
    }

    const hanleOnEnded = () => {
        dispatch(setIsPlay(false));
    }

    const handleOnSeek = (second) => {
        console.log(second);
    }


    return (
        <div className='video-player_wrapper'>

            <Space direction="vertical" style={{ width: '100%' }}>
                <div className='container-player'>
                    <ReactPlayer
                        className='player-demension'
                        playing={isPlay}
                        ref={setRef}
                        url={url}
                        width='100%'
                        controls={true}
                        height='440px'
                        onProgress={handleOnProgress}
                        onPlay={handleOnStart}
                        onPause={handleOnPause}
                        onEnded={hanleOnEnded}
                        onSeek={handleOnSeek}

                    />
                </div>


                <div className='video-player_sub'>

                    <div className="video-player_sub--previous video-player_sub-flex" onClick={handlePreviousPane}>
                        <div className="icon " >
                            <StepBackwardOutlined />
                        </div>
                    </div>

                    <div className="video-player_sub--content video-player_sub-flex ">
                        {scriptPanes}
                    </div>

                    <div className="video-player_sub--next video-player_sub-flex " onClick={handleNextPane}>
                        <div className="icon">
                            <StepForwardOutlined />
                        </div>
                    </div>

                </div>



            </Space>



        </div>
    );
}

export default VideoPlayer;