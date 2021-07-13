import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Affix } from 'antd';
import { ReadOutlined, SoundOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SubAnswer from 'features/OnlineExam/components/SubAnswer';
import { titlEachPart } from 'constants/ToeicSheet';


AnswerSheet.propTypes = {

};

function AnswerSheet(props) {




    const [expandIconPosition, setExpandIconPosition] = useState('left');

    const { Panel } = Collapse;

    const { answers } = useSelector(state => state.exam);

    const answers_part1 = answers.filter(answer => answer.stt <= 6);
    const answers_part2 = answers.filter(answer => answer.stt > 6 && answer.stt <= 31);
    const answers_part3 = answers.filter(answer => answer.stt > 31 && answer.stt <= 70);
    const answers_part4 = answers.filter(answer => answer.stt > 70 && answer.stt <= 100);
    const answers_part5 = answers.filter(answer => answer.stt > 100 && answer.stt <= 130);
    const answers_part6 = answers.filter(answer => answer.stt > 130 && answer.stt <= 146);
    const answers_part7 = answers.filter(answer => answer.stt > 146 && answer.stt <= 200);


    function callback(key) {
        console.log(key);
    }


    return (
        <div>
            <Affix offsetTop={10} >
                <Collapse accordion defaultActiveKey={['1']} onChange={callback} expandIconPosition={expandIconPosition} >

                    <Panel header="Part 1" key="1" extra={<SoundOutlined />}>
                        <SubAnswer title={titlEachPart.PART1} data={answers_part1} />
                    </Panel>
                    <Panel header="Part 2" key="2" extra={<SoundOutlined />} className="notify">
                        <SubAnswer title={titlEachPart.PART2} data={answers_part2} />
                    </Panel>
                    <Panel header="Part 3" key="3" extra={<SoundOutlined />}  >
                        <SubAnswer title={titlEachPart.PART3} data={answers_part3} />
                    </Panel>
                    <Panel header="Part 4" key="4" extra={<SoundOutlined />}>
                        <SubAnswer title={titlEachPart.PART4} data={answers_part4} />
                    </Panel>
                    <Panel header="Part 5" key="5" extra={<ReadOutlined />}>
                        <SubAnswer title={titlEachPart.PART5} data={answers_part5} />
                    </Panel>
                    <Panel header="Part 6" key="6" extra={<ReadOutlined />}>
                        <SubAnswer title={titlEachPart.PART6} data={answers_part6} />
                    </Panel>
                    <Panel header="Part 7" key="7" extra={<ReadOutlined />}>
                        <SubAnswer title={titlEachPart.PART7} data={answers_part7} />
                    </Panel>

                </Collapse>
            </Affix>
        </div>
    );
}

export default AnswerSheet;