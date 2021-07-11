import { Layout } from 'antd';
import Banner from 'components/Banner/Banner';
import TestRecommend from 'features/Home/components/TestRecommend';
import React from 'react';
import VideoRecommend from '../VideoRecommend';
import PropTypes from 'prop-types';


Landing.propTypes = {
    listTestRecommend: PropTypes.array,
    listVideoRecommend: PropTypes.array,
};

Landing.defaultProps = {
    listTestRecommend: [],
    listVideoRecommend: [],
}

const { Content, Footer } = Layout;

function Landing(props) {
    const { listTestRecommend, listVideoRecommend } = props;


    return (

        <Layout className='landing_wrapper'>

            <Layout >
                <Content>
                    <Banner />
                    <TestRecommend listTestRecommend={listTestRecommend} />
                    <VideoRecommend listVideoRecommend={listVideoRecommend} />
                </Content>
            </Layout>
            <Footer>footer</Footer>

        </Layout>

    );
}

export default Landing;