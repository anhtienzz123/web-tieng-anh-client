import { Spin } from "antd";
import NotFoundPage from "components/NotFoundPage";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Topic from "./pages/Topic";

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
