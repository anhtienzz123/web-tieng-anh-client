import { Col, Row, Select } from 'antd';
import BlockLevel from 'components/BlockLevel';
import { dataSelectDuration, dataSelectLevel } from 'constants/dataSelectLevel';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNextPage, raisePage, setLevel, setTimeFrom, setTimeTo } from 'features/Video/videoSlice';

import './style.scss';
SearchBar.propTypes = {
    title: PropTypes.string,
    onSelectedDuration: PropTypes.func,
    onSelectedLevel: PropTypes.func,
};

SearchBar.defaultProps = {
    title: 'Inspiration Video',
    onSelectedDuration: null,
    onSelectedLevel: null
};

function SearchBar(props) {
    const { title, onSelectedLevel, onSelectedDuration } = props;
    const { movies, level, durationSelected } = useSelector((state) => state.video);
    const { Option } = Select;
    const dispatch = useDispatch();



    useEffect(() => {

    }, [movies])



    function handleLevelChange(value) {
        if (onSelectedLevel) {
            onSelectedLevel(value);
        }
    }

    function handleDurationChange(value) {
        if (onSelectedDuration) {
            onSelectedDuration(value);
        }
    }

    function handleFocus() {

    }
    return (

        <div className='search-bar'>


            <Row align="middle" gutter={[16, 16]}>
                <Col span={15}>
                    <div className='search-bar_title'>
                        {title}
                    </div>
                </Col>

                {/* <div className="search-bar_filter"> */}

                <Col span={2}>
                    <div className='search-bar_filter_name' >
                        Filter by
                    </div>
                </Col>

                <Col span={4}>
                    <div className='search-bar_filter_level' >
                        <Select value={level === '' ? 'Select Value' : level} defaultValue='Select value' style={{ width: '100%' }} onChange={handleLevelChange}>

                            {dataSelectLevel.map(element => (
                                <Option key={element.levelValue} value={element.levelValue}>
                                    <div className='align-center'>
                                        <BlockLevel level={element.levelValue.toString()} /> &nbsp;&nbsp;<span>{element.levelName}</span>
                                    </div>
                                </Option>
                            ))}



                        </Select>
                    </div>
                </Col>

                <Col span={3}>
                    <div className='search-bar_filter_duration' >
                        <Select value={durationSelected === '' ? 'Select duration' : durationSelected} style={{ width: '100%' }} onChange={handleDurationChange}>
                            {dataSelectDuration.map((element, index) => (
                                <Option key={index} value={element.duration}>
                                    {element.duration}
                                </Option>
                            ))}



                        </Select>
                    </div>

                </Col>

                {/* </div> */}

            </Row>



        </div >
    );
}

export default SearchBar;