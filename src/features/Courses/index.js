import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "components/NotFoundPage";
import Topic from "./pages/Topic";
import { useSelector } from "react-redux";
import { Spin } from "antd";

function Course(props) {
	const { isLoading } = useSelector((state) => state.global);
	const { url } = useRouteMatch();

	return (
		<Spin spinning={isLoading}>
			<div>
				<Switch>
					<Route exact path={url} component={MainPage} />
					<Route path={`${url}/:slug`} component={Topic} />

					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Spin>
	);
}
Course.propTypes = {};
Course.defaultProps = {};

export default Course;
