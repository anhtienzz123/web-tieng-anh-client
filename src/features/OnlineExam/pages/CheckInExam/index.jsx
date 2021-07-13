import { CheckSquareTwoTone, ClockCircleOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import { useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import './style.scss';
CheckInExam.propTypes = {

};

function CheckInExam(props) {
    let { testId } = useParams();

    const { examSelected } = useSelector(state => state.exam);

    const history = useHistory();

    function handleOnClick() {
        history.replace(`/exams/${testId}/examining`);
    }

    return (
        <div className="checkin-exam" >
            <Space direction="vertical" size='large' >
                <div className="checkin-exam_title">
                    <span>{examSelected}</span>
                </div>

                <div className="checkin-exam_info">
                    <Space direction="vertical" >
                        <span className="checkin-exam_info--time total--time ">
                            <ClockCircleOutlined />
                            &nbsp;
                            Total time: 120
                        </span>
                        <span className="checkin-exam_info--time">
                            <CheckSquareTwoTone />
                            &nbsp;
                            Listening: 45
                        </span>
                        <span className="checkin-exam_info--time">
                            <CheckSquareTwoTone />
                            &nbsp;
                            Reading : 75
                        </span>
                    </Space>
                </div>

                <div className="checkin-exam_button">
                    <Button type="primary" block shape="round" className="checkin-exam_button--width" onClick={handleOnClick}>
                        START
                    </Button>
                </div>
            </Space>
        </div>
    );
}

export default CheckInExam;