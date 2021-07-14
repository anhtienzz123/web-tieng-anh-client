import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { setExamSelected, setScrollId, writeAnswerSheet } from 'features/OnlineExam/onlineExamSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLoadExamSelectedAfterRefresh from 'utils/useLoadExamSelectedAfterRefresh';
import useWindowUnloadEffect from 'utils/useWindowUnloadEffect';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';
import './style.scss';

ToeicPart.propTypes = {

};

function ToeicPart(props) {
    useLoadExamSelectedAfterRefresh();

    const { questions, examSelected } = useSelector(state => state.exam);
    const { part1, part2, part3, part4, part5, part6, part7 } = questions;

    const dispatch = useDispatch();
    console.log('Selected - exam: ', examSelected);

    function handlePreviousClick() {
        console.log("Previous");
        dispatch(setExamSelected(examSelected - 1));
        dispatch(setScrollId('top'));
    }
    function handleNextClick() {
        console.log("Next");
        dispatch(setExamSelected(examSelected + 1));
        dispatch(setScrollId('top'));
    }

    function handleSelected(object) {
        dispatch(writeAnswerSheet(object));
    }

    function renderSwitch(selected) {
        switch (selected) {
            case 1:
                return <Part1 data={part1} onAnswerSheetClick={handleSelected} />;
            case 2:
                return <Part2 data={part2} onAnswerSheetClick={handleSelected} />;
            case 3:
                return <Part3 data={part3} />;
            case 4:
                return <Part4 data={part4} />;
            case 5:
                return <Part5 data={part5} />;
            case 6:
                return <Part6 data={part6} />;
            case 7:
                return <Part7 data={part7} />;
            default:
                break;
        }
    }

    useWindowUnloadEffect(() => {
        localStorage.setItem('partSelected', examSelected);
    }, true);



    return (
        <div className="toeic_part">
            <div className="toeic_part_content">
                {/* <Part2 data={part2} />
                <Part3 data={part3} />
                <Part4 data={part4} />
                <Part5 data={part5} />
                <Part6 data={part6} />
                <Part7 data={part7} /> */}

                {renderSwitch(examSelected)}
            </div>

            <div className="toeic_part_button">


                <Row justify="space-around">
                    <Col span={4}>
                        <Button type="primary" block onClick={handlePreviousClick} >
                            <CaretLeftFilled />
                            <b>Previous</b>
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" block onClick={handleNextClick}>
                            <b>Next</b>
                            <CaretRightFilled />
                        </Button>
                    </Col>

                </Row>
            </div>
        </div>

    );
}

export default ToeicPart;