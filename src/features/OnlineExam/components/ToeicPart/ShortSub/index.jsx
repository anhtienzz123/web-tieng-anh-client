import React from 'react';
import PropTypes from 'prop-types';
import { Radio, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CustomAudioControl from 'components/CustomAudioControl';
import parse from 'html-react-parser';
import { Divider } from 'antd';
import './style.scss';





ShortSub.propTypes = {
    data: PropTypes.array,
    onAnswerSheetClick: PropTypes.func,
    image: PropTypes.string,
    audio: PropTypes.string,
    checkPart: PropTypes.bool,
    para: PropTypes.string,

};

ShortSub.defaultProps = {
    data: [],
    onAnswerSheetClick: null,
    image: '',
    audio: null,
    checkPart: true,
    para: ''
}




function ShortSub(props) {
    const { data, onAnswerSheetClick, image, audio, checkPart, para } = props;
    const { answers, scrollId } = useSelector(state => state.exam);




    useEffect(() => {

        document.getElementById(`${scrollId}`).scrollIntoView();
        console.log("scroll to ", scrollId)
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
        <div className="short_part">
            <Space direction="vertical" style={{ width: "100%" }} size="large">
                <div className={checkPart ? '' : 'content'}>
                    {image && <img src={image} alt="error picture" />}

                    {checkPart && <CustomAudioControl audio={audio} onPlay={false} />}
                    <div>
                        {checkPart ? '' :

                            parse(audio)

                        }
                    </div>

                </div>






                {
                    data.map((element, index) => (

                        <Space direction="vertical" key={index}>

                            <div id={element.stt} className='title_question' >{element.content}</div>
                            {/* onChange={(e) => handleSelected(element.stt, e)} value={answers[element.stt - 1].selected} */}
                            <Radio.Group onChange={(e) => handleSelected(element.stt, e)} value={answers[element.stt - 1].selected}>
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

export default ShortSub;