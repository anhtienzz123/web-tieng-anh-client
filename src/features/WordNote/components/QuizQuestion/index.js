import { Col, Radio, Row } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./style.scss";

function QuizQuestion(props) {
	const { word, setUserAnswer } = props;
	const answerLabel = ["A", "B", "C", "D"];
	const [selectedValue, setSelectedValue] = useState("");

	useEffect(() => {
		setSelectedValue(word.image);
	}, [word]);

	const onChange = (e) => {
		const userAnswer = e.target.value;
		setUserAnswer(userAnswer);
		setSelectedValue("");
	};
	return (
		<div className="quiz-question-container">
			<Radio.Group buttonStyle="solid" size="large" onChange={onChange}>
				<Row justify="center" gutter={[24, 24]}>
					{word.suggestions.map((value, index) => (
						<Col xs={24} sm={24} md={12} lg={12} xl={12} key={index}>
							<Radio.Button
								value={value}
							>{`${answerLabel[index]}. ${value}`}</Radio.Button>
						</Col>
					))}
				</Row>
			</Radio.Group>
		</div>
	);
}
QuizQuestion.propTypes = {
	setUserAnswer: PropTypes.func,
	word: PropTypes.object,
};
QuizQuestion.defaultProps = {
	setUserAnswer: null,
	word: {},
};

export default QuizQuestion;
