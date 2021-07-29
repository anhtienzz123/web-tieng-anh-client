import React from 'react';
import PropTypes from 'prop-types';
import MainPage from 'features/Video/pages/Mainpage';
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import NotFoundPage from "components/NotFoundPage";
import VideoPage from './pages/VideoPage';

Video.propTypes = {

};

function Video(props) {

    const { isLoading } = useSelector((state) => state.login);
    const { url } = useRouteMatch();
    return (
        <Spin spinning={isLoading} >
            <div>
                <Switch>
                    <Route exact path="/videos/:slugCategory" component={MainPage} />
                    <Route exact path="/videos/:slugCategory/:slugVideo" component={VideoPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Spin >
    );
}

export default Video;