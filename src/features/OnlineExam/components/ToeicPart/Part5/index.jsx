import { CheckCircleTwoTone } from '@ant-design/icons';
import { Divider, Radio, Space } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

Part5.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
};
Part5.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
}

function Part5(props) {
    const { data, onAnswerSheetClick } = props;
    const { answers, scrollId, isSubmit } = useSelector(state => state.exam);

    useEffect(() => {
        document.getElementById(`${scrollId}`).scrollIntoView();
    }, [scrollId])

    function handleSelected(question, e) {
        const answer = {
            question: question,
            selected: e.target.value
        };

        console.log("Check answer", answer);

        if (onAnswerSheetClick) {
            onAnswerSheetClick(answer);
        }

    }

    return (
        <div className="content_part" id="top">
            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Mark your answer on your answer sheet:</b>
                <Divider />


                {
                    data.map((question, index) => (

                        <div className="question" key={index}>

                            <Space direction="vertical">

                                <p className='title_question' id={question.stt} >{question.content}</p>

                                <Radio.Group disabled={isSubmit} onChange={(e) => handleSelected(question.stt, e)} value={answers[question.stt - 1].selected}>

                                    <Space direction="vertical">
                                        <Radio value={'A'}>{question.a} {answers[question.stt - 1].result === 'a' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                        <Radio value={'B'}>{question.b} {answers[question.stt - 1].result === 'b' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                        <Radio value={'C'}>{question.c} {answers[question.stt - 1].result === 'c' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                        <Radio value={'D'}>{question.d} {answers[question.stt - 1].result === 'd' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                    </Space>
                                </Radio.Group>
                            </Space>

                        </div>
                    ))
                }
            </Space>
        </div>
    );
}

export default Part5;