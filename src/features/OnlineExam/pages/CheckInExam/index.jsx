import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Space, Card } from 'antd';
import { Button } from 'antd';
import './style.scss';
import { ClockCircleOutlined, CheckSquareTwoTone } from '@ant-design/icons';
CheckInExam.propTypes = {

};

function CheckInExam(props) {
    let { testId, setTestId } = useParams();
    const listSetExam = useSelector(state => state.exam);
    const setExam = listSetExam.find(element => element.id == setTestId);
    const test = setExam.listTest.find(element => element.id == testId);

    console.log(test);

    return (
        <div className="checkin-exam" >
            <Space direction="vertical" size='large' >
                <div className="checkin-exam_title">
                    <span>{test.subjectName} - {test.nameTest}</span>
                </div>

                <div className="checkin-exam_info">
                    <Space direction="vertical" >
                        <span className="checkin-exam_info--time total--time ">
                            <ClockCircleOutlined />
                            &nbsp;
                            Total time: {test.reading_time + test.listening_tiem}
                        </span>
                        <span className="checkin-exam_info--time">
                            <CheckSquareTwoTone />
                            &nbsp;
                            Listening: {test.reading_time}
                        </span>
                        <span className="checkin-exam_info--time">
                            <CheckSquareTwoTone />
                            &nbsp;
                            Reading : {test.listening_tiem}
                        </span>
                    </Space>
                </div>

                <div className="checkin-exam_button">
                    <Button type="primary" block shape="round" className="checkin-exam_button--width">
                        Start
                    </Button>
                </div>
            </Space>
        </div>
    );
}

export default CheckInExam;