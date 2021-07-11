import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainPage from './pages/MainPage';
import NotFoundPage from "components/NotFoundPage";
import CheckInExam from "./pages/CheckInExam";
OnlineExam.propTypes = {

};

function OnlineExam(props) {
    const match = useRouteMatch();
    const { url } = match;
    return (
        <div>
            <Switch>

                <Route path={`${url}/checkin/:setTestId/:testId`} component={CheckInExam} />
                <Route exact path={url} component={MainPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default OnlineExam;