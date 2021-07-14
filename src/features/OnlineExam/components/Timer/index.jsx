import React, { useState, useEffect } from 'react';
import { Row, Col, Divider } from 'antd';
import { Affix, Button } from 'antd';
import PropTypes from 'prop-types';
import { FieldTimeOutlined, DownloadOutlined } from '@ant-design/icons';
import './style.scss';
import useWindowUnloadEffect from 'utils/useWindowUnloadEffect';
Timer.propTypes = {

};

function Timer(props) {
    const initialMinute = 120;
    const initialSeconds = 0;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);



    useEffect(() => {
        let timeTemp = localStorage.getItem('timeRemain');
        if (timeTemp != "undefined" && timeTemp != null) {

            let time = JSON.parse(timeTemp);
            console.log(time);

            setMinutes(time.minute);
            setSeconds(time.second);
        }
    }, [])

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }

        }, 1000);
        return () => {
            clearInterval(myInterval);

        };
    });


    useWindowUnloadEffect(() => {
        let timeRemain = {
            minute: minutes,
            second: seconds,
        }
        localStorage.setItem('timeRemain', JSON.stringify(timeRemain));

    }, true);




    return (

        <Affix offsetTop={0}>
            <div className='timer_wrapper'>
                <Row justify="center" align="middle">
                    <Col span={4}>
                        <div >
                            {minutes === 0 && seconds === 0
                                ? <span className='countdown_timer timeout'>Time Out</span>
                                : <span className='countdown_timer' > <FieldTimeOutlined style={{ fontSize: '3rem' }} /> {minutes > 10 ? minutes : `0${minutes}`}<span>m</span> {seconds < 10 ? `0${seconds}` : seconds}<span>s</span> </span>

                            }
                        </div>
                    </Col>
                    <Col span={4}>
                        <Button size='large' block>
                            <b>SUBMIT</b>
                        </Button>
                    </Col>
                </Row>
            </div>
        </Affix>






    )
}

export default Timer;