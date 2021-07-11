import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import ListExam from 'features/OnlineExam/components/ListExam';
MainPage.propTypes = {

};

function MainPage(props) {
    const listTest = useSelector(state => state.exam);
   
    return (
        <div>
            <ListExam listExam={listTest} />
        </div>
    );
}

export default MainPage;