import { FileTextOutlined } from "@ant-design/icons";
import { Col, Result, Row } from "antd";
import BackToTopButton from "components/BackToTopButton";
import { fetchBlogDetail } from "features/Blog/blogSlice";
import Parser from "html-react-parser";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.scss";
import imageNotFound from "assets/images/image-not-found.svg";

function BlogDetailPage(props) {
	const { slug } = useParams();

	const { blogDetail } = useSelector((state) => state.blog);

	const { domToReact } = Parser;
	const style = require("style-to-object");

	const dispatch = useDispatch();

	useEffect(() => {
		document.title = blogDetail?.name || "Blog";
	});

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchBlogDetail({ slug }));
	}, []);

	return (
		<div id="blog-detail-page">
			{blogDetail && Object.keys(blogDetail).length > 0 ? (
				<>
					{console.log(blogDetail)}
					<Row justify="center" className="topic-thumbnail">
						<img
							src={blogDetail?.image || ""}
							alt={blogDetail?.name}
							onError={(e) => (e.target.src = imageNotFound)}
						/>
						<div className="topic-thumbnail__overlay">
							<div className="topic-thumbnail__title">{blogDetail?.name}</div>
							<div className="topic-thumbnail__description">
								{blogDetail?.description}
							</div>
							<div className="topic-thumbnail__word-count">
								<FileTextOutlined />
								&nbsp;&nbsp;
								{blogDetail?.createDate}
							</div>
						</div>
					</Row>
					<Row justify="center">
						<Col span={16}>
							<div className="content-blog">
								{blogDetail?.content &&
									Parser(blogDetail?.content, {
										replace: (domNode) => {
											if (domNode.attribs && domNode.attribs.style) {
												try {
													style(domNode.attribs.style);
												} catch (error) {
													// delete the attribute that's causing the error
													// then convert the dom node to react
													delete domNode.attribs.style;
													return domToReact(domNode);
												}
											}
										},
									})}
							</div>
						</Col>
					</Row>
					<BackToTopButton />
				</>
			) : (
				<Result status="404" title="không tìm thấy" />
			)}
		</div>
	);
}
BlogDetailPage.propTypes = {};
BlogDetailPage.defaultProps = {};

export default BlogDetailPage;
