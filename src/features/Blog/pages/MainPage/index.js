import { DownOutlined } from "@ant-design/icons";
import {
	Button,
	Col,
	Divider,
	Dropdown,
	Menu,
	Pagination,
	Radio,
	Row,
	Space,
} from "antd";
import BackToTopButton from "components/BackToTopButton";
import TopicCard from "components/TopicCard";
import { fetchBlogCategories, fetchBlogs } from "features/Blog/blogSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function MainPage(props) {
	const [blogCategorySelected, setBlogCategorySelected] = useState("-1");

	const dispatch = useDispatch();
	const { blogs, blogCategories } = useSelector((state) => state.blog);

	const { data = [], page = 1, size = 1, totalPages = 1 } = blogs;
	const filterSelected =
		blogCategorySelected !== "-1" ? blogCategorySelected : "";

	const handleOnChange = (e) => {
		const blogCategorySelected = e.target.value;
		setBlogCategorySelected(blogCategorySelected);
		blogCategorySelected === "-1"
			? dispatch(fetchBlogs({ page: 0 }))
			: dispatch(fetchBlogs({ categorySlug: blogCategorySelected }));
	};

	const handleOnPageChange = (page) => {
		window.scrollTo(0, 0);
		dispatch(fetchBlogs({ categorySlug: filterSelected, page: page - 1 }));
	};

	useEffect(() => {
		dispatch(fetchBlogs({ page: 0, categorySlug: filterSelected }));
		dispatch(fetchBlogCategories());
	}, []);

	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Radio.Group
					onChange={handleOnChange}
					defaultValue={blogCategorySelected}
				>
					<Space direction="vertical">
						<Radio value={"-1"}>Tất cả</Radio>
						{blogCategories.map((category, index) => (
							<Radio key={index} value={category.slug}>
								{category.name}
							</Radio>
						))}
					</Space>
				</Radio.Group>
			</Menu.Item>
		</Menu>
	);

	return (
		<div id="blog-main-page">
			<Row justify="end">
				<Col>
					Lọc theo &nbsp;
					<Dropdown overlay={menu}>
						<Button>
							Loại <DownOutlined />
						</Button>
					</Dropdown>
				</Col>
			</Row>

			<Divider />

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

			{totalPages > 1 && (
				<Row justify="center">
					<Pagination
						total={totalPages * size}
						showQuickJumper
						pageSize={size}
						onChange={handleOnPageChange}
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
