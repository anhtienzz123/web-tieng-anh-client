import { Col, Divider, Pagination, Result, Row } from "antd";
import BackToTopButton from "components/BackToTopButton";
import TopicCard from "components/TopicCard";
import { fetchBlogCategories, fetchBlogs } from "features/Blog/blogSlice";
import BlogSearch from "features/Blog/components/BlogSearch";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function MainPage(props) {
	const [blogCategorySelected, setBlogCategorySelected] = useState("-1");

	const dispatch = useDispatch();
	const { blogs, blogCategories } = useSelector((state) => state.blog);

	const { data = [], page = 1, size = 1, totalPages = 1 } = blogs;

	const [query, setQuery] = useState({
		name: "",
		categorySlug: "",
		page: 0,
		size: 12,
	});

	const handleSearchChange = (queryValue) => {
		const { name, categorySlug } = queryValue;
		setQuery({ page: 0, size: 12, name, categorySlug });
	};

	const handlePageChange = (page, pageSize) => {
		setQuery({ ...query, page: page - 1 });
	};

	useEffect(() => {
		document.title = "Blog";
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchBlogs(query));
		dispatch(fetchBlogCategories());
	}, [query]);

	return (
		<div id="blog-main-page">
			<Row justify="start" gutter={[8, 8]}>
				<BlogSearch categories={blogCategories} onChange={handleSearchChange} />
			</Row>
			<Divider />
			{data.length > 0 ? (
				<Row justify="start" gutter={[36, 24]}>
					{data.map((blog, index) => {
						const topic = { ...blog, additionalInfo: blog.createDate };
						return (
							<Col key={index} xs={24} sm={12} md={8} lg={6}>
								<TopicCard topic={topic} />
							</Col>
						);
					})}
					<BackToTopButton />
				</Row>
			) : (
				<Result status="404" title="Không tìm thấy" />
			)}
			{totalPages > 1 && (
				<Row justify="center">
					<Pagination
						total={totalPages * size}
						showQuickJumper
						pageSize={size}
						onChange={handlePageChange}
						showSizeChanger={false}
						current={page + 1}
					/>
				</Row>
			)}
		</div>
	);
}

MainPage.propTypes = {};
MainPage.defaultProps = {};

export default MainPage;
