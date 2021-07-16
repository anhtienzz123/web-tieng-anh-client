import { Radio, Space } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

LongSub.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
};

LongSub.defaultProps = {
    data: [],
    onAnswerSheetClick: null
}

function LongSub(props) {
    const { answers, scrollId } = useSelector(state => state.exam);
    const { data, onAnswerSheetClick } = props;

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
        <div >
            <Space direction="vertical" style={{ width: "100%" }} size="large">
                {
                    data.map((element, index) => (

                        <Space direction="vertical" >
                            <div id={element.stt} key={index}>{element.stt}. {element.content}</div>

                            <Radio.Group  onChange={(e) => handleSelected(element.stt, e)} value={answers[element.stt - 1].selected}>
                                <Space direction="vertical" >
                                    <Radio value={'A'}>{element.a}</Radio>
                                    <Radio value={'B'}>{element.b}</Radio>
                                    <Radio value={'C'}>{element.c}</Radio>
                                    <Radio value={'D'}>{element.d}</Radio>
                                </Space>

                            </Radio.Group>
                        </Space>
                    ))
                }
            </Space>
        </div>
    );
}

export default LongSub;