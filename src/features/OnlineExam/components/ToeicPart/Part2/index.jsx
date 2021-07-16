import { Divider, Radio, Space } from 'antd';
import CustomAudioControl from 'components/CustomAudioControl';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
Part2.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    longAudio: PropTypes.string
};
Part2.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    longAudio: null
}


function Part2(props) {
    const { data, onAnswerSheetClick, longAudio } = props;
    const { answers, scrollId } = useSelector(state => state.exam);



    useEffect(() => {
        console.log('effect', scrollId);
        document.getElementById(`${scrollId}`).scrollIntoView();
    }, [scrollId]);

    function handleSelected(question, e) {
        const answer = {
            question: question,
            selected: e.target.value
        };
        if (onAnswerSheetClick) {
            onAnswerSheetClick(answer);
        }

    }

    console.log('data part 1', data);
    return (
        <div id='top'>
            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Mark your answer on your answer sheet:</b>
                <Divider />
                <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>

                {
                    longAudio != null
                        ? <CustomAudioControl audio={longAudio} />
                        : ''
                }


                {
                    data.map((question, index) => (

                        <div className="question" key={index} id={question.stt} >

                            <Space direction="vertical">
                                {
                                    longAudio == null
                                        ? <CustomAudioControl audio={question.audio} onPlay={false} />
                                        : ''
                                }

                                <p  >{question.stt} : Select the answer</p>

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