import { Layout } from 'antd';
import Banner from 'components/Banner/Banner';
import TestRecommend from 'features/Home/components/TestRecommend';
import React from 'react';
import VideoRecommend from '../VideoRecommend';
import { Divider } from 'antd';


Landing.propTypes = {

};

const { Content, Footer, Sider } = Layout;

function Landing(props) {

    return (

        <Layout className='landing_wrapper'>

            <Layout >
                <Content>
                    <Banner />
                    <TestRecommend />
                    <VideoRecommend />
                </Content>
            </Layout>
            <Footer>footer</Footer>

        </Layout>

    );
}

export default Landing;