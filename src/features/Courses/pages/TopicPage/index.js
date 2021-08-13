import { FileTextOutlined } from "@ant-design/icons";
import { Affix, Divider, Pagination, Row } from "antd";
import WordList from "features/Courses/components/WordList";
import {
	fetchCourseDetail,
	fetchCourseWords,
} from "features/Courses/courseSlice";
import { fetchWordNotes } from "features/WordNote/wordNoteSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.scss";

function TopicPage(props) {
	const { slug } = useParams();

	const { courseWords, courseDetail } = useSelector((state) => state.course);

	const { image, name, description, wordNumber } = courseDetail;
	const { data = [], page = 1, size = 1, totalPages = 1 } = courseWords;

	const dispatch = useDispatch();

	const handleOnPageChange = (page) => {
		window.scrollTo(0, 0);
		dispatch(fetchCourseWords({ courseSlug: slug, page: page - 1 }));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchCourseWords({ courseSlug: slug }));
		dispatch(fetchCourseDetail({ slug }));
		dispatch(fetchWordNotes());
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
						total={totalPages * size}
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
				<WordList data={data} />
			</div>
		</div>
	);
}
TopicPage.propTypes = {};
TopicPage.defaultProps = {};

export default TopicPage;
