import { Spin } from 'antd';
import ListExam from 'features/OnlineExam/components/ListExam';
import React from 'react';
import { useSelector } from "react-redux";
import './style.scss';
MainPage.propTypes = {


};

function MainPage(props) {
    const { setExam, isLoading } = useSelector(state => state.exam);


    return (

        <Spin spinning={isLoading}>
            <div id="list_exam">
                <ListExam examList={setExam} />
            </div>
        </Spin>

    );
}

export default MainPage;