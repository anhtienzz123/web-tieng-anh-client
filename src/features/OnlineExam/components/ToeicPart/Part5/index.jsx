import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Divider, Radio, Space } from 'antd';

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
    const { answers, scrollId } = useSelector(state => state.exam);

    useEffect(() => {
        console.log('effect', scrollId);
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

                                <p id={question.stt} >{question.stt} : {question.content}</p>

                                <Radio.Group onChange={(e) => handleSelected(question.stt, e)} value={answers[question.stt - 1].selected}>

                                    <Space direction="vertical">
                                        <Radio value={'A'}>{question.a}</Radio>
                                        <Radio value={'B'}>{question.b}</Radio>
                                        <Radio value={'C'}>{question.c}</Radio>
                                        <Radio value={'D'}>{question.d}</Radio>
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