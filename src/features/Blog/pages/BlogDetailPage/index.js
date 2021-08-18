import { FileTextOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import BackToTopButton from "components/BackToTopButton";
import { fetchBlogDetail } from "features/Blog/blogSlice";
import Parser from "html-react-parser";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.scss";

function BlogDetailPage(props) {
	const { slug } = useParams();

	const { blogDetail } = useSelector((state) => state.blog);

	const { image, name, description, content, createDate } = blogDetail;

	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchBlogDetail({ slug }));
	}, []);

	return (
		<div id="blog-detail-page">
			<Row justify="center" className="topic-thumbnail">
				<img src={image} alt={name} />
				<div className="topic-thumbnail__overlay">
					<div className="topic-thumbnail__title">{name}</div>
					<div className="topic-thumbnail__description">{description}</div>
					<div className="topic-thumbnail__word-count">
						<FileTextOutlined />
						&nbsp;&nbsp;
						{createDate}
					</div>
				</div>
			</Row>

			<Row justify="center">
				<Col span={16}>
					<div className='content-blog'>{content && Parser(content)}</div>
				</Col>
			</Row>

			<BackToTopButton />
		</div>
	);
}
BlogDetailPage.propTypes = {};
BlogDetailPage.defaultProps = {};

export default BlogDetailPage;
