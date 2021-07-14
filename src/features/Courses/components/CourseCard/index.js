import { Button } from "antd";
import { setLoading } from "app/globalSlice";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import "./style.scss";

function CourseCard(props) {
	const { course, maxCharacterCount } = props;

	console.log(course);
	const { url } = useRouteMatch();
	const { image, slug, name, description, wordNumber, personNumber } = course;
	const history = useHistory();
	const dispatch = useDispatch();

	const [isTruncated, setIsTruncated] = useState(true);

	console.log(course);

	const shortDescription = isTruncated
		? description.slice(0, maxCharacterCount) + "..."
		: description;

	// function handleOnClick() {
	// 	dispatch(setLoading(true));

	// 	setTimeout(
	// 		() =>
	// 			history.push({
	// 				pathname: `${url}${slug}`,
	// 				// state: {
	// 				// 	wordsets: list === undefined ? [] : list,

	// 				// 	course: course,
	// 				// },
	// 			}),
	// 		300
	// 	);
	// }

	return (
		<div className="course-card">
			<div className="course-card__image">
				<Link to={`${url}/${slug}`}>
					<img src={image} alt="Oops ... Not found" />
				</Link>
			</div>
			<div className="course-card__content">
				<div className="course-card__title">
					<Link to={`${url}/${slug}`}>{name}</Link>
				</div>

				{description.length > maxCharacterCount ? (
					<>
						<div className="course-card__description">
							{shortDescription}
							<Button type="link" onClick={() => setIsTruncated(!isTruncated)}>
								{isTruncated ? "Show more >" : "Hide <"}
							</Button>
						</div>
					</>
				) : (
					<div className="course-card__description">{description}</div>
				)}
				<div className="course-card__words">{`${wordNumber} words`}</div>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	course: PropTypes.object,
	maxCharacterCount: PropTypes.number,
};
CourseCard.defaultProps = {
	course: {},
	maxCharacterCount: 140,
};

export default CourseCard;
