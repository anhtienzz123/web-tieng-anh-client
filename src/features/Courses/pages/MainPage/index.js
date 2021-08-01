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
import CourseList from "features/Courses/components/CourseList";
import { fetchCourses, fetchTopics } from "features/Courses/courseSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function MainPage(props) {
	const [courseSelected, setCourseSelected] = useState("All");

	const dispatch = useDispatch();
	const { courses, topics } = useSelector((state) => state.course);

	const { data = [], page = 1, size = 1, totalPages = 1 } = courses;
	const filterSelected = courseSelected !== "All" ? courseSelected : "";

	const handleOnChange = (e) => {
		const courseSelected = e.target.value;
		setCourseSelected(courseSelected);
		courseSelected === "All"
			? dispatch(fetchCourses({ page: 0 }))
			: dispatch(fetchCourses({ topicSlug: courseSelected }));
	};

	const handleOnPageChange = (page) => {
		// window.scrollTo(0, 0);
		dispatch(fetchCourses({ topicSlug: filterSelected, page: page - 1 }));
	};

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(fetchCourses({ page: 0, topicSlug: filterSelected }));
		dispatch(fetchTopics());
	}, []);

	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Radio.Group onChange={handleOnChange} defaultValue={courseSelected}>
					<Space direction="vertical">
						<Radio value={"All"}>All</Radio>
						{topics.map((topic, index) => (
							<Radio key={index} value={topic.slug}>
								{topic.name}
							</Radio>
						))}
					</Space>
				</Radio.Group>
			</Menu.Item>
		</Menu>
	);

	return (
		<div id="course-main-page">
			<Row justify="end">
				<Col>
					Filter by &nbsp;
					<Dropdown overlay={menu}>
						<Button>
							Topic <DownOutlined />
						</Button>
					</Dropdown>
				</Col>
			</Row>

			<Divider />

			<CourseList courses={data} />

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
