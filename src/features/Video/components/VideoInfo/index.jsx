import { ExclamationCircleOutlined, HighlightOutlined } from '@ant-design/icons';
import { Space, Table, Tabs, Tag } from 'antd';
import BlockLevel from 'components/BlockLevel';
import React from 'react';
import './style.scss';


VideoInfo.propTypes = {

};

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

function VideoInfo(props) {
    const { TabPane } = Tabs;
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <ExclamationCircleOutlined />
                            Video Infomation
                        </span>
                    }
                    key="1"
                >
                    <Space direction="vertical">
                        <div className="info_name">
                            "You Can Also Be Great" - Elon Musk Motivation
                        </div>
                        <div className="info_level-and-subject">
                            <BlockLevel level="3" width="40" height="40" fontsize='1.8rem' />
                            <div>
                                &nbsp; Intermediate | <a href="">Inspiration</a>
                            </div>
                        </div>
                        <div className="info_description">

                            Elon Musk Incredible Speech - Motivational video By MulliganBrothers
                        </div>
                    </Space>

                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <HighlightOutlined />
                            Vocabulary
                        </span>
                    }
                    key="2"
                >
                    <Table columns={columns} dataSource={data} />
                </TabPane>
            </Tabs>,
        </div>
    );
}

export default VideoInfo;