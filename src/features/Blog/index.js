import { Spin } from "antd";
import NotFoundPage from "components/NotFoundPage";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogDetailPage from "./pages/BlogDetailPage";
import MainPage from "./pages/MainPage";

function Blog(props) {
	const { isLoading } = useSelector((state) => state.blog);
	const { url } = useRouteMatch();

	return (
		<Spin spinning={isLoading}>
			<div>
				<Switch>
					<Route exact path={url} component={MainPage} />
					<Route path={`${url}/:slug`} component={BlogDetailPage} />

					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Spin>
	);
}
Blog.propTypes = {};
Blog.defaultProps = {};

export default Blog;
