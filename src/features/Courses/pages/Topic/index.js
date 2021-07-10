import { UpOutlined } from "@ant-design/icons";
import { BackTop, Col, Row, Tooltip } from "antd";
import { setLoading } from "app/globalSlice";
import WordCard from "features/Courses/components/WordCard";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./style.scss";

function Topic(props) {
	const location = useLocation();
	const course = location.state.course;
	const temp = location.state.wordsets;
	const words = temp.length > 0 ? temp[0].wordsets : [];

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setLoading(false));
	}, []);

	return (
		<div id="topic-page">
			<Row justify="start" gutter={[36, 24]}>
				{words.map((word) => (
					<Col key={words.word} xs={24} sm={24} md={12} lg={12}>
						<WordCard word={word} />
					</Col>
				))}
				<Tooltip title="Back to top">
					<BackTop>
						<div className="back-top">
							<UpOutlined />
						</div>
					</BackTop>
				</Tooltip>
			</Row>
		</div>
	);
}
Topic.propTypes = {};
Topic.defaultProps = {};

export default Topic;
