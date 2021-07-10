import { DownOutlined } from "@ant-design/icons";
import {
	Button,
	Col,
	Divider,
	Dropdown,
	Menu,
	message,
	Pagination,
	Radio,
	Row,
	Space,
} from "antd";
import { COURSE_LIST } from "features/Courses/constants/global";
import CourseList from "features/Courses/components/CourseList";
import React, { useState } from "react";
import "./style.scss";

function MainPage(props) {
	const [courseSelected, setCourseSelected] = useState("All");
	const courses = COURSE_LIST;
	function handleOnChange(e) {
		const courseSelected = e.target.value;
		setCourseSelected(courseSelected);
		message.info(courseSelected);
	}
	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Radio.Group onChange={handleOnChange} defaultValue={courseSelected}>
					<Space direction="vertical">
						<Radio value={"All"}>All</Radio>
						<Radio value={"Communication"}>Communication</Radio>
						<Radio value={"Specialized"}>Specialized</Radio>
						<Radio value={"Test preparation"}>Test preparation</Radio>
						<Radio value={"School"}>School</Radio>
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

			<CourseList courses={courses} />

			<Row justify="center">
				<Pagination total={25} showQuickJumper />
			</Row>
		</div>
	);
}

MainPage.propTypes = {};
MainPage.defaultProps = {};

export default MainPage;
