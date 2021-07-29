import { ExclamationCircleOutlined, HighlightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tabs } from 'antd';
import BlockLevel from 'components/BlockLevel';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AudioCustom from '../AudioCustom';
import { dataSelectLevel } from 'constants/dataSelectLevel';
import './style.scss';
import {useSelector} from 'react-redux';


VideoInfo.propTypes = {
    videoWords: PropTypes.array,
    categoryName: PropTypes.string,
    name: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    slugCategory: PropTypes.string,
};

VideoInfo.defaultProps = {
    videoWords: [],
    categoryName: '',
    name: '',
    level: '',
    description: '',
    slugCategory: ''
}
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




function getLevelTitle(level) {
    if (level) {
        const temp = dataSelectLevel.find(element => element.levelValue === level);
        return temp.levelName;
    }
}


function VideoInfo(props) {
    const { TabPane } = Tabs;
    const { videoWords, categoryName, name, level, description, slugCategory } = props;
    const data = [];
    
    let audio;

    const handleAudioClick = (url) => {
        
        // da co audio
        if(audio)
            audio.pause();

        audio = new Audio(url);
        audio.load();
        audio.play();
    }

    videoWords.map((element, index) => {

        data.push({
            key: element.id,
            total: { audio: <AudioCustom
              onClick={handleAudioClick}
             url={element.sound} id={element.id} /> , keyword: element.name },
            frequency: element.frequency,
            wordroot: element.origin,

        })

    })

  
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
                            {name}
                        </div>
                        <div className="info_level-and-subject">
                            <BlockLevel level={level.toString()} width="40" height="40" fontsize='1.8rem' />
                            <div>
                                &nbsp; {getLevelTitle(level)} | <Link to={"/videos/" + slugCategory}>{categoryName}</Link>
                            </div>
                        </div>
                        <div className="info_description">

                            {description}
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