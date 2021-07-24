import { Radio, Space } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';

LongSub.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    name: PropTypes.string,
};

LongSub.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    name: ''
}

function LongSub(props) {
    const { answers, scrollId, isSubmit, transcript } = useSelector(state => state.exam);
    const { data, onAnswerSheetClick, name } = props;



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
                          

                            <Radio.Group disabled={isSubmit} onChange={(e) => handleSelected(element.stt, e)} value={answers[element.stt - 1].selected}>
                                <Space direction="vertical" >
                                    <Radio value={'A'}>{element.a}{answers[element.stt - 1].result === 'a' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                    <Radio value={'B'}>{element.b}{answers[element.stt - 1].result === 'b' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                    <Radio value={'C'}>{element.c}{answers[element.stt - 1].result === 'c' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
                                    <Radio value={'D'}>{element.d}{answers[element.stt - 1].result === 'd' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : ''}</Radio>
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