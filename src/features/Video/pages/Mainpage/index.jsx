import { Col, Row, Spin } from 'antd';
import Slider from 'features/Video/components/Slider';
import VideoCard from 'features/Video/components/VideoCard';
import { fetchByCategoryVideo, raisePage, fetchNextPage } from 'features/Video/videoSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import './style.scss';

MainPage.propTypes = {

};

function MainPage(props) {


    const { slugCategory } = useParams();
    const dispatch = useDispatch();
    const { movies, page, totalPages, level } = useSelector((state) => state.video);
    const { data } = movies;

    useEffect(() => {
        if (slugCategory) {
            dispatch(fetchByCategoryVideo({
                slug: slugCategory,
            }));
        }
    }, [slugCategory]);



    useEffect(() => {
        if (slugCategory && page) {
            dispatch(fetchNextPage({
                slug: slugCategory,
                page: page
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


    return (
        <div>
            <Slider />

            
            <div className="mainpage_wrapper">

                <InfiniteScroll
                    style={{ overflowX: 'hidden' }}
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

            </div>



        </div >
    );
}

export default MainPage;