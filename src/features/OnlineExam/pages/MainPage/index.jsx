import { Spin } from 'antd';
import ListExam from 'features/OnlineExam/components/ListExam';
import { fetchBooks } from 'features/OnlineExam/onlineExamSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
MainPage.propTypes = {


};

function MainPage(props) {
    const { setExam, isLoading } = useSelector(state => state.exam);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());


    }, []);

    // const history = useHistory();
    // const match = useRouteMatch();
    // const { url } = match;

    // console.log(url)

    return (

        <Spin spinning={isLoading}>
            <div>
                <ListExam examList={setExam} />
            </div>
        </Spin>

    );
}

export default MainPage;