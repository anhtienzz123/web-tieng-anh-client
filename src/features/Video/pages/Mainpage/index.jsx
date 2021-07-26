import { Col, Divider, Row, Spin } from 'antd';
import { dataSelectDuration } from 'constants/dataSelectLevel';
import SearchBar from 'features/Video/components/SearchBar';
import Slider from 'features/Video/components/Slider';
import VideoCard from 'features/Video/components/VideoCard';
import { fetchByCategoryVideo, setDurationSelected, fetchNextPage, raisePage, setLevel, setTimeFrom, setTimeTo } from 'features/Video/videoSlice';
import React, { useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Empty } from 'antd';
import './style.scss';

MainPage.propTypes = {

};

function MainPage(props) {


    const { slugCategory } = useParams();
    const dispatch = useDispatch();
    const { movies, page, totalPages, level, timeFrom, timeTo, titleVideoSelected } = useSelector((state) => state.video);
    const { data } = movies;

    useEffect(() => {

        if (slugCategory) {
            dispatch(fetchByCategoryVideo({
                slug: slugCategory,
                level: level,
                timeFrom: timeFrom,
                timeTo: timeTo

            }));
        }
    }, [slugCategory, level, timeFrom, timeTo]);



    useEffect(() => {
        if (slugCategory && page) {
            dispatch(fetchNextPage({
                slug: slugCategory,
                page: page,
                level: level,
                timeFrom: timeFrom,
                timeTo: timeTo
            }))
        }
    }, [page])

    const handleNextScroll = () => {
        dispatch(raisePage())
    }

    let check = true;
    if (page === totalPages) {
        check = false
    }

    function handleLevelChange(value) {
        dispatch(setLevel(parseInt(value)));

    }

    function handleDurationChange(value) {
        const valueObject = handleDataDuration(value);
        dispatch(setTimeTo(valueObject.value.timeTo));
        dispatch(setTimeFrom(valueObject.value.timeFrom));
        dispatch(setDurationSelected(value));

    }

    function handleDataDuration(duration) {
        return dataSelectDuration.find(element => element.duration === duration);
    }


    return (
        <div>
            <Slider slug={slugCategory} />

            <div className="mainpage_wrapper">
                <SearchBar title={titleVideoSelected} onSelectedDuration={handleDurationChange} onSelectedLevel={handleLevelChange} />
                <Divider></Divider>


                <InfiniteScroll
                    style={{ overflowX: 'hidden', overflowY: 'hidden' }}
                    dataLength={data ? data.length : 0}
                    next={handleNextScroll}
                    hasMore={true}
                    loader={check ? <div className="loader"><Spin size="medium" /></div> : ''}

                >
                    <Row gutter={[8, 16]}>

                        {
                            data && data.map((element, index) => (
                                <Col key={index} span={6} >
                                    <VideoCard data={element} />
                                </Col>
                            ))
                        }


                    </Row>
                </InfiniteScroll>

                {(data && data.length === 0) ?
                    <Empty /> : ''
                }


            </div>



        </div >
    );
}

export default MainPage;