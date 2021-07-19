import { Divider, Radio, Space } from 'antd';
import CustomAudioControl from 'components/CustomAudioControl';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


Part1.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    longAudio: PropTypes.string
};

Part1.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    longAudio: null
}

function Part1(props) {

    const { data, onAnswerSheetClick, longAudio } = props;
    const { answers, scrollId } = useSelector(state => state.exam);

    useEffect(() => {
        document.getElementById(`${scrollId}`).scrollIntoView();
    }, [scrollId])

    console.log(scrollId);




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
        <div className="content_part" id="top">


            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Mark your answer on your answer sheet:</b>
                <Divider />
                <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>

                {longAudio &&
                    <div className="content_part--audio">
                        <CustomAudioControl audio={longAudio} />
                    </div>
                }


                {
                    data.map((question, index) => (

                        <div className="question" key={index}>

                            <Space direction="vertical">
                                {
                                    longAudio == null
                                        ? <CustomAudioControl audio={question.audio} onPlay={false} />
                                        : ''
                                }

                                <div className="question--img" id={question.stt}>
                                    <img src={question.content} alt="" />
                                </div>
                                <p className='title_question'>{question.stt} : Select the answer</p>

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

export default Part1;