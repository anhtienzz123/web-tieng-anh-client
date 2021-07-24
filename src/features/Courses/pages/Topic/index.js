import { FileTextOutlined } from "@ant-design/icons";
import { Affix, Col, Divider, Pagination, Row } from "antd";
import BackToTopButton from "components/BackToTopButton";
import WordCard from "features/Courses/components/WordCard";
import {
	fetchCourseDetail,
	fetchCourseWords,
} from "features/Courses/courseSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.scss";

function Topic(props) {
	const { slug } = useParams();
	const { courseWords, courseDetail } = useSelector((state) => state.course);

	const { image, name, description, wordNumber } = courseDetail;
	const { data = [], page = 1, size = 1, pageMax = 1 } = courseWords;

	const dispatch = useDispatch();

	const handleOnPageChange = (page) => {
		// window.scrollTo(0, 0);
		dispatch(fetchCourseWords({ courseSlug: slug, page: page - 1 }));
	};

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(fetchCourseWords({ courseSlug: slug }));
		dispatch(fetchCourseDetail({ slug }));
	}, []);

	return (
		<div id="topic-page">
			<Row justify="center" className="topic-thumbnail">
				<img src={image} alt={name} />
				<div className="topic-thumbnail__overlay">
					<div className="topic-thumbnail__title">{name}</div>
					<div className="topic-thumbnail__description">{description}</div>
					<div className="topic-thumbnail__word-count">
						<FileTextOutlined />
						&nbsp;&nbsp;
						{wordNumber} words
					</div>
				</div>
			</Row>

			<Affix>
				<Row justify="center" className="pagination-top">
					<Pagination
						total={pageMax * size}
						showQuickJumper
						pageSize={size}
						onChange={handleOnPageChange}
						showSizeChanger={false}
						current={page + 1}
					/>
				</Row>
			</Affix>

			<Divider orientation="left" style={{ fontSize: 32 }}>
				{name}
			</Divider>
			<div className="topic-page__content">
				<Row justify="start" gutter={[36, 24]}>
					{courseWords &&
						Object.keys(courseWords).length !== 0 &&
						data.map((word, index) => (
							<Col key={index} xs={24} sm={24} md={12} lg={12}>
								<WordCard word={word} />
							</Col>
						))}
				</Row>
				<BackToTopButton />
			</div>
		</div>
	);
}
Topic.propTypes = {};
Topic.defaultProps = {};

export default Topic;
