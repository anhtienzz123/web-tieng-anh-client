import { CheckCircleTwoTone } from '@ant-design/icons';
import { Divider, Radio, Space } from 'antd';
import CustomAudioControl from 'components/CustomAudioControl';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    const { answers, scrollId, isSubmit } = useSelector(state => state.exam);



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


    return (
        <div id='top'>
            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Mark your answer on your answer sheet:</b>
                <Divider />
                <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>


                {(isSubmit === false && longAudio != null) ?
                    <div className="content_part--audio">
                        <CustomAudioControl audio={longAudio} onPlay={!isSubmit} />
                    </div> : ''
                }


                {
                    data.map((question, index) => (

                        <div className="question" key={index} id={question.stt} >

                            <Space direction="vertical" style={{ width: '100%' }}>
                                {
                                    longAudio == null
                                        ? <CustomAudioControl audio={question.audio} onPlay={false} />
                                        : ''
                                }

                                {
                                    isSubmit ? <CustomAudioControl audio={answers[question.stt - 1].audio} onPlay={false} /> : ''
                                }

                                <p className='title_question' >{question.stt} : Select the answer</p>



                                <Radio.Group disabled={isSubmit} onChange={(e) => handleSelected(question.stt, e)} value={answers[question.stt - 1].selected}>

                                    <Space direction="vertical">
                                        <Radio value={'A'}>Option A {answers[question.stt - 1].result === 'a' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                        <Radio value={'B'}>Option B {answers[question.stt - 1].result === "b" ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                        <Radio value={'C'}>Option C {answers[question.stt - 1].result === "c" ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                        <Radio value={'D'}>Option D {answers[question.stt - 1].result === "d" ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
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