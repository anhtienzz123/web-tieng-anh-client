import { Divider, Space } from 'antd';
import CustomAudioControl from 'components/CustomAudioControl';
import PropTypes from 'prop-types';
import React from 'react';
import LongSub from '../LongSub';
LongPart.propTypes = {
    data: PropTypes.array,
    longAudio: PropTypes.string,
    onAnswerSheetClick: PropTypes.func,
};

LongPart.defaultProps = {
    data: [],
    longAudio: '',
    onAnswerSheetClick: null

}

function LongPart(props) {
    const { data, longAudio, onAnswerSheetClick } = props;
    console.log("check dataa long", data);

    return (
        <div>
            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Question 71 - 74 refer to following conversation: </b>
                <Divider />
                <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>

                <CustomAudioControl audio={longAudio} />



                {
                    data.map((question, index) => (
                        <div className="question" key={index} id={question.stt} >
                            <Space direction="vertical">
                                {question.image && <img src={question.image} alt="" />}
                                <LongSub data={question.questions} onAnswerSheetClick={onAnswerSheetClick} />
                            </Space>


                        </div>

                    ))
                }
            </Space>
        </div>
    );
}

export default LongPart;