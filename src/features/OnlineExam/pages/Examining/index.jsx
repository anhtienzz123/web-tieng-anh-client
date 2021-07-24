import { Col, Modal, Row } from 'antd';
import AnswerSheet from 'features/OnlineExam/components/AnswerSheet';
import Timer from 'features/OnlineExam/components/Timer';
import ToeicPart from 'features/OnlineExam/components/ToeicPart';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Prompt, useParams } from 'react-router';
import { refreshStore } from 'features/OnlineExam/onlineExamSlice'
import './style.scss';




function Examining(props) {


    const ReachableContext = React.createContext();
    const { testId } = useParams();
    const dispatch = useDispatch();

    // const [modal, contextHolder] = Modal.useModal();

    // let checkPass;
    // const config = {
    //     title: 'Do you really want to leave the test ?',
    //     onOk() {
    //         checkPass = true;
    //     },

    //     onCancel() {
    //         checkPass = false;
    //     }
    // };

    useEffect(() => {

        return () => {
            dispatch(refreshStore())
        }
    }, []);


    console.log(testId)
    const { isSubmit } = useSelector(state => state.exam);




    return (
        <>
            <Prompt

                message={(location, action) => {

                    return location.pathname.startsWith(`/exams/${testId}`)
                        ? true
                        : 'Do you really want to leave the test ? '
                }}
            />


            <Row gutter={[16, 16]}>
                <Col span={24} >
                    {isSubmit ? '' : <Timer />}
                </Col>
            </Row>
            <div className='examining'>
                <Row gutter={[16, 16]}>
                    <Col span={17} >
                        <ToeicPart />

                    </Col>
                    <Col span={7} >
                        <AnswerSheet />
                    </Col>
                </Row>

            </div>
            {/* <ReachableContext.Provider value=''>
                {contextHolder}
            </ReachableContext.Provider> */}
        </>
    );
}

export default Examining;