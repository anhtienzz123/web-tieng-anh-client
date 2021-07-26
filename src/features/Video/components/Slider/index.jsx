import { Row } from 'antd';
import VideoCard from 'features/Video/components/VideoCard';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSliderBySlug } from 'features/Video/videoSlice';

Slider.propTypes = {
    slug: PropTypes.string,
};

Slider.defaultProps = {
    slug: ''
}

function Slider(props) {
    const { slug } = props;
    const { moviesSlider } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSliderBySlug({
            slug: slug
        }))
    }, [slug])

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    let items = [];

    if (moviesSlider) {
        for (let index = 0; index < 5; index++) {
            items.push(
                <VideoCard data={moviesSlider[index]} height='350px' padding='10px' />
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