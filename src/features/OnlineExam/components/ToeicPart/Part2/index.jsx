import { Divider, Radio, Space } from 'antd';
import CustomAudioControl from 'components/CustomAudioControl';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
Part2.propTypes = {
    data: PropTypes.object,
    onAnswerSheetClick: PropTypes.func,
};
Part2.defaultProps = {
    data: {},
    onAnswerSheetClick: null,
}

function Part2(props) {
    const { data, onAnswerSheetClick } = props;
    const { audio, questions } = data;
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
        if (onAnswerSheetClick) {
            onAnswerSheetClick(answer);
        }

    }
    return (
        <div id='top'>
            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Mark your answer on your answer sheet:</b>
                <Divider />
                <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>

                <div className="content_part--audio">
                    <CustomAudioControl audio={audio} />
                </div>


                {
                    questions.map((question, index) => (

                        <div className="question" key={index}>

                            <Space direction="vertical">

                                <div className="question--img" id={question.stt}>
                                    <img src={question.contents} alt="" />
                                </div>
                                <p >{question.stt} : Select the answer</p>

                                <Radio.Group onChange={(e) => handleSelected(question.stt, e)} value={answers[question.stt - 1].selected}>

                                    <Space direction="vertical">
                                        <Radio value={'A'}>Option A</Radio>
                                        <Radio value={'B'}>Option B</Radio>
                                        <Radio value={'C'}>Option C</Radio>
                                        <Radio value={'D'}>Option D</Radio>
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

export default Part2;