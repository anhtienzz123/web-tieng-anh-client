import { UpOutlined } from "@ant-design/icons";
import { BackTop, Col, Row, Tooltip } from "antd";
import PropTypes from "prop-types";
import React from "react";
import CourseCard from "../CourseCard";
import "./style.scss";

function CourseList(props) {
	const { courses } = props;
	return (
		<Row justify="start" gutter={[36, 24]}>
			{courses.map((course) => (
				<Col key={course.id} xs={24} sm={12} md={8} lg={6}>
					<CourseCard course={course} />
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
	);
}
CourseList.propTypes = {
	courses: PropTypes.array,
};
CourseList.defaultProps = {
	courses: [],
};
export default CourseList;
