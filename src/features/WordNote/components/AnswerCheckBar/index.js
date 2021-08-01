import { Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

function AnswerCheckBar(props) {
	const {
		handleOnCheckAnswer,
		userAnswer,
		isCheckAnswer,
		setIsCheckAnswer,
		isCorrectAnswer,
		handleChangeWordReview,
		isCompleted,
	} = props;

	return (
		<>
			{!isCompleted && (
				<div
					className={`answer-check-bar${
						isCheckAnswer
							? ""
							: isCorrectAnswer
							? " answer-check-bar--success"
							: " answer-check-bar--danger"
					}`}
				>
					<Row justify="space-around">
						<Col>
							{isCheckAnswer && (
								<button
									className="btn btn--normal"
									onClick={() => {
										handleOnCheckAnswer(false);
									}}
								>
									Bỏ qua
								</button>
							)}
						</Col>
						<Col>
							{isCheckAnswer ? (
								<button
									className={`btn ${userAnswer ? "btn--success" : "disable"}`}
									onClick={() => {
										handleOnCheckAnswer(true);
										setIsCheckAnswer(false);
									}}
									disabled={userAnswer ? false : true}
								>
									Kiểm tra
								</button>
							) : (
								<button
									className={`btn ${
										isCorrectAnswer ? "btn--success" : "btn--danger"
									}`}
									onClick={() => {
										handleChangeWordReview(isCorrectAnswer ? true : false);
										setIsCheckAnswer(true);
									}}
								>
									Tiếp tục
								</button>
							)}
						</Col>
					</Row>
				</div>
			)}
		</>
	);
}

AnswerCheckBar.propTypes = {
	handleChangeWordReview: PropTypes.func,
	handleOnCheckAnswer: PropTypes.func,
	isCheckAnswer: PropTypes.bool,
	isCorrectAnswer: PropTypes.bool,
	setIsCheckAnswer: PropTypes.func,
	setIsCorrectAnswer: PropTypes.func,
	userAnswer: PropTypes.string,
};
AnswerCheckBar.defaultProps = {
	handleChangeWordReview: null,
	handleOnCheckAnswer: null,
	isCheckAnswer: true,
	isCorrectAnswer: true,
	setIsCheckAnswer: null,
	setIsCorrectAnswer: null,
	userAnswer: "",
};

export default AnswerCheckBar;
