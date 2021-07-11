import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Divider, Button } from 'antd';
import TestCard from 'features/Home/components/TestCard';
import { DownCircleOutlined } from '@ant-design/icons';
import './style.scss';
TestRecommend.propTypes = {
    listTestRecommend: PropTypes.array,
};

TestRecommend.defaultProps = {
    listTestRecommend: [],
};



function TestRecommend(props) {

    const { listTestRecommend } = props;
    console.log('check', listTestRecommend);
    return (
        <div className="test_recommend">
            <div className='test_recommend--info'>
                <span>Recommend Test</span>
                <span>Most viewed Tests</span>
            </div>

            <div className="test_recommend--content">
                <Row gutter={[16, 16]}>

                    {listTestRecommend.map(test => (
                        <TestCard test={test} />
                    ))}

                </Row>
            </div>

            <div className="test_recommend--button">
                <Button id="button" shape="round" type="primary" icon={<DownCircleOutlined />} size='large'>
                    More
                </Button>

            </div>
        </div>

    );
}

export default TestRecommend;