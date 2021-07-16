import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Space } from 'antd';
import ShortSub from '../ShortSub';
import { useSelector, useDispatch } from 'react-redux';


ShortPart.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
};

ShortPart.defaultProps = {
    data: [],
    onAnswerSheetClick: null
}

function ShortPart(props) {
    const { data, onAnswerSheetClick } = props;
    const { subPartSelected } = useSelector(state => state.exam);
    const tempData = data[subPartSelected];
    console.log(tempData);


    return (
        <div>
            <Space direction="vertical" size='large' style={{ width: '100%' }} >
                <b>Question 71 - 74 refer to following conversation: </b>
                <Divider />
                <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>


                {/* {
                    data.map((question, index) => (
                        <div className="question" key={index} id={question.stt} >
                            <Space direction="vertical" style={{ width: "100%" }}>

                                <ShortSub audio={question.paragraph} image={question.image} data={question.questions} onAnswerSheetClick={onAnswerSheetClick} />
                            </Space>


                        </div>

                    ))
                } */}

                {

                    <div className="question" >
                        <Space direction="vertical" style={{ width: "100%" }}>
                            <ShortSub audio={tempData.paragraph} image={tempData.image} data={tempData.questions} onAnswerSheetClick={onAnswerSheetClick} />
                        </Space>
                    </div>


                }


            </Space>
        </div>
    );
}

export default ShortPart;