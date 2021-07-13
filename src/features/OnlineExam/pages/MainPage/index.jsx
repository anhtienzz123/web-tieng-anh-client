import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import ListExam from 'features/OnlineExam/components/ListExam';
import { useHistory, useRouteMatch } from 'react-router-dom';
MainPage.propTypes = {

};

function MainPage(props) {
    const { setExam } = useSelector(state => state.exam);
    // const history = useHistory();
    // const match = useRouteMatch();
    // const { url } = match;

    // console.log(url)

    return (
        <div>
            <ListExam examList={setExam} />
        </div>
    );
}

export default MainPage;