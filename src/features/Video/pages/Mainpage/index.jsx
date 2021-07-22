import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
MainPage.propTypes = {

};

function MainPage(props) {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    const items = [
        <div className="item" data-value="1" style={{ border: "1px solid black", margin: '5px 5px' }}>1</div>,
        <div className="item" data-value="2" style={{ border: "1px solid black", margin: '5px 5px' }}>2</div>,
        <div className="item" data-value="3" style={{ border: "1px solid black", margin: '5px 5px' }}>3</div>,
        <div className="item" data-value="4" style={{ border: "1px solid black", margin: '5px 5px' }}>4</div>,
        <div className="item" data-value="5" style={{ border: "1px solid black", margin: '5px 5px' }}>5</div>,
    ];


    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };



    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>

            <hr />
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay={true}
                animationDuration={2000}
                disableButtonsControls={true}
                infinite={true}
                paddingLeft={100}
            />

        </div>
    );
}

export default MainPage;