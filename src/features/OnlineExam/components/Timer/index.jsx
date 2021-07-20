import { FieldTimeOutlined } from '@ant-design/icons';
import { Affix, Button, Col, Modal, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useWindowUnloadEffect from 'utils/useWindowUnloadEffect';
import { useDispatch } from 'react-redux';
import './style.scss';
import { setIsSubmit } from 'features/OnlineExam/onlineExamSlice';
Timer.propTypes = {
    page: PropTypes.string,
};
Timer.defaultProps = {
    page: '',
};


function Timer(props) {
    const { page } = props;
    const initialMinute = 0;
    const initialSeconds = 10;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const dispatch = useDispatch();



    useEffect(() => {
        let timeTemp = localStorage.getItem('timeRemain');
        if (timeTemp != "undefined" && timeTemp != null) {

            let time = JSON.parse(timeTemp);

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

        if (seconds === 0 && minutes === 0) {
            modal.warning(config);
        }
        return () => {
            clearInterval(myInterval);

        };
    });



    // modal timeout config
    const ReachableContext = React.createContext();
    const [modal, contextHolder] = Modal.useModal();

    const config = {
        title: 'Use Hook!',
        content: (
            <>
                <ReachableContext.Consumer>{name => `${name} !`}</ReachableContext.Consumer>
            </>
        ),
        onOk() {
            history.push(`/exams/${testId}/result`);
            dispatch(setIsSubmit(true));
            localStorage.setItem('isSubmit', true);
        },
        onCancel() {
            history.push(`/exams/${testId}/result`);
            dispatch(setIsSubmit(true));
            localStorage.setItem('isSubmit', true);
        }
    };


    useWindowUnloadEffect(() => {
        let timeRemain = {
            minute: minutes,
            second: seconds,
        }
        localStorage.setItem('timeRemain', JSON.stringify(timeRemain));

    }, true);

    const history = useHistory();
    const param = useParams();
    const { testId } = param;

    const handleOnClick = () => {
        history.push(`/exams/${testId}/checkout`);
    }




    return (

        <Affix offsetTop={0}>
            <div className='timer_wrapper'>
                <Row justify="center" align="middle">

                    {

                        page !== 'checkout' ?

                            <>

                                <Col span={4}>
                                    <div >
                                        {minutes === 0 && seconds === 0
                                            ? <span className='countdown_timer timeout'>Time Out</span>
                                            : <span className='countdown_timer' > <FieldTimeOutlined style={{ fontSize: '3rem' }} /> {minutes > 10 ? minutes : `0${minutes}`}<span>m</span> {seconds < 10 ? `0${seconds}` : seconds}<span>s</span> </span>

                                        }
                                    </div>
                                </Col>

                                <Col span={4}>
                                    <Button onClick={handleOnClick} size='large' block>
                                        <b>Checkout</b>
                                    </Button>
                                </Col>

                            </>
                            :
                            <Col >
                                <div >
                                    {minutes === 0 && seconds === 0
                                        ? <span className='countdown_timer timeout'>Time Out</span>
                                        : <span className='countdown_timer' > <FieldTimeOutlined style={{ fontSize: '3rem' }} /> {minutes > 10 ? minutes : `0${minutes}`}<span>m</span> {seconds < 10 ? `0${seconds}` : seconds}<span>s</span> </span>

                                    }
                                </div>
                            </Col>


                    }
                </Row>
            </div>

            <ReachableContext.Provider value="Time out">

                {contextHolder}
            </ReachableContext.Provider>
        </Affix>






    )
}

export default Timer;