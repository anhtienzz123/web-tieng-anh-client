import { DownloadOutlined, ExclamationCircleOutlined, HighlightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tabs, Tag } from 'antd';
import BlockLevel from 'components/BlockLevel';
import React from 'react';
import { Link } from 'react-router-dom';
import AudioCustom from '../AudioCustom';
import './style.scss';


VideoInfo.propTypes = {

};
const URL = 'https://toeicexamstore.xyz/upload/audiotoeic/part1875.mp3';

const columns = [
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (object) => (
            <div className='cell_sound'>{object.audio}&nbsp;&nbsp;{object.keyword}</div>
        )
    },
    {
        title: 'Frequency',
        dataIndex: 'frequency',
        key: 'frequency',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.frequency - b.frequency,
    },
    {
        title: 'Word root',
        key: 'wordroot',
        dataIndex: 'wordroot',
    },
    {
        title: '',
        key: 'play',
        align: 'center',


        render: (text, record) => (
            <div>
                <Button type="primary" shape="round" icon={<PlayCircleOutlined />} size='small'>
                    Play
                </Button>
            </div >
        )
    },
];

const data = [
    {
        key: '1',
        total: { audio: <AudioCustom url={URL} id='5678' />, keyword: 'asdfasdf' },
        frequency: 10,
        wordroot: 'abcyz',

    },

    {
        key: '2',
        total: { audio: <AudioCustom url={URL} id='5678' />, keyword: 'asdfasdf' },
        frequency: 20,
        wordroot: 'abcyz',

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
                                &nbsp; Intermediate | <Link to="/videos/abc">Infomation Technogoly</Link>
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
                    <Table pagination={false} scroll={{ y: 400 }} columns={columns} dataSource={data} />
                </TabPane>
            </Tabs>,
        </div>
    );
}

export default VideoInfo;