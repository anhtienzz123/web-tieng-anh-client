import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from 'features/Video/components/VideoCard';
import { Row, Col } from 'antd';
Slider.propTypes = {

};

function Slider(props) {

    const { movies } = useSelector((state) => state.video);
    const { data } = movies;

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    let items = [];

    if (data) {
        for (let index = 0; index < 5; index++) {
            items.push(
                <VideoCard data={data[index]} height='350px' padding='10px' />
            )

        }

    }

    let mainItem = <Row gutter={[8, 16]}></Row>


    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (

        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={true}
            animationDuration={3000}
            disableButtonsControls={true}
            infinite={true}
            paddingLeft={30}

        />
    );
}

export default Slider;