import { Col, Row } from "antd";
import BackToTopButton from "components/BackToTopButton";
import PropTypes from "prop-types";
import React from "react";
import CourseCard from "../CourseCard";
import "./style.scss";

function CourseList(props) {
	const { courses } = props;

	return (
		<Row justify="start" gutter={[36, 24]}>
			{courses.map((course, index) => (
				<Col key={index} xs={24} sm={12} md={8} lg={6}>
					<CourseCard course={course} />
				</Col>
			))}
			<BackToTopButton />
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
