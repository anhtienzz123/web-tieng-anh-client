import { Button } from "antd";
import { setLoading } from "app/globalSlice";
import { WORD_SET } from "features/Courses/constants/global";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./style.scss";

function CourseCard(props) {
	const { course, maxCharacterCount } = props;
	const { url } = useRouteMatch();
	const { id, image, title, description, wordCount } = course;
	const history = useHistory();
	const dispatch = useDispatch();

	const [isTruncated, setIsTruncated] = useState(true);

	const shortDescription = isTruncated
		? description.slice(0, maxCharacterCount) + "..."
		: description;

	const listWord = WORD_SET;

	function handleOnClick() {
		dispatch(setLoading(true));

		const list = listWord.filter((item) => {
			if (item.id === id) {
				return item.wordsets;
			}
		});

		setTimeout(
			() =>
				history.push({
					pathname: `${url}/topic`,
					state: {
						wordsets: list === undefined ? [] : list,

						course: course,
					},
				}),
			300
		);
	}

	return (
		<div className="course-card">
			<div className="course-card__image">
				<img onClick={handleOnClick} src={image} alt="Oops ... Not found" />
			</div>
			<div className="course-card__content">
				<div className="course-card__title">
					<a onClick={handleOnClick}>{title}</a>
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
				<div className="course-card__words">{wordCount}</div>
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
