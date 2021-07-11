import { FileTextOutlined, UpOutlined } from "@ant-design/icons";
import { Affix, BackTop, Col, Divider, Pagination, Row, Tooltip } from "antd";
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
	const { id, image, title, description, wordCount } = course;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setLoading(false));
	}, []);

	return (
		<div id="topic-page">
			<Row justify="center" className="topic-thumbnail">
				<img src={image} alt={title} />
				<div className="topic-thumbnail__overlay">
					<div className="topic-thumbnail__title">{title}</div>
					<div className="topic-thumbnail__description">{description}</div>
					<div className="topic-thumbnail__word-count">
						<FileTextOutlined />
						&nbsp;&nbsp;
						{wordCount}
					</div>
				</div>
			</Row>

			<Affix>
				<Row justify="center" className="pagination-top">
					<Pagination total={25} showQuickJumper />
				</Row>
			</Affix>

			<Divider orientation="left" style={{ fontSize: 32 }}>
				{title}
			</Divider>
			<div className="topic-page__content">
				<Row justify="start" gutter={[36, 24]}>
					{words.map((word) => (
						<Col key={words.word} xs={24} sm={24} md={12} lg={12}>
							<WordCard word={word} />
						</Col>
					))}
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<br />.
					<Tooltip title="Back to top">
						<BackTop>
							<div className="back-top">
								<UpOutlined />
							</div>
						</BackTop>
					</Tooltip>
				</Row>
			</div>
		</div>
	);
}
Topic.propTypes = {};
Topic.defaultProps = {};

export default Topic;
