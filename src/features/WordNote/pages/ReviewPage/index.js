import { Empty, Progress, Result } from "antd";
import {
	AnswerCheckBar,
	completeSound,
	correctAnswer,
	QuestionSuggestion,
	QuizQuestion,
	WordFillQuestion,
	WordNoteHeader,
	wrongAnswer,
} from "features/WordNote/common";
import {
	getWordNoteDetail,
	getWordNoteReview,
} from "features/WordNote/wordNoteSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./style.scss";

function ReviewPage(props) {
	const { wordnoteId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	let audio;
	const type = Math.round(Math.random());

	const [finishedWords, setFinishedWords] = useState([null]);
	const [percent, setPercent] = useState(0);
	const [userAnswer, setUserAnswer] = useState(undefined);
	const [isCheckAnswer, setIsCheckAnswer] = useState(true);

	const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
	const [isCompleted, setIsCompleted] = useState(false);
	const [questionType, setQuestionType] = useState(type);

	const { isError, wordNoteDetail, word } = useSelector(
		(state) => state.wordNote
	);

	const increase = () => {
		let newPercent = Math.round(
			(finishedWords.length * 100) / wordNoteDetail.wordNumber
		);
		if (newPercent > 100) {
			newPercent = 100;
		}
		setPercent(newPercent);
	};

	const playAudio = (url) => {
		if (audio) audio.pause();
		audio = new Audio(url);
		audio.load();
		audio.play();
	};

	const handleChangeWordReview = (isCorrectAnswer = false) => {
		const newWordIds = [...finishedWords];
		isCorrectAnswer && newWordIds.push(word.id);
		const newType = Math.round(Math.random());
		const values = { type: newType, ids: newWordIds };
		dispatch(getWordNoteReview({ wordnoteId, values }));
		setFinishedWords(newWordIds);
		setQuestionType(newType);
		setUserAnswer(undefined);
	};

	const handleOnCheckAnswer = (isIgnore = true) => {
		if (isIgnore) {
			if (userAnswer === word.name) {
				increase();
				setIsCorrectAnswer(true);
				if (wordNoteDetail.wordNumber === finishedWords.length) {
					handleChangeWordReview(true);
					setIsCompleted(true);
					return;
				}
				playAudio(correctAnswer);
			} else {
				playAudio(wrongAnswer);
				setIsCorrectAnswer(false);
			}
			return isCorrectAnswer;
		} else {
			handleChangeWordReview(isIgnore);
		}
	};

	useEffect(() => {
		const values = { type: questionType, ids: null };
		dispatch(getWordNoteDetail(wordnoteId));
		dispatch(getWordNoteReview({ wordnoteId, values }));
	}, []);

	return (
		<>
			<div id="review-page">
				<WordNoteHeader
					isReviewPage={true}
					isError={isError}
					wordNoteDetail={wordNoteDetail}
					goBackUrl={`/wordnotes/${wordnoteId}`}
				/>
				{isError ? (
					<Result status="404" title="400" subTitle="An error has occurred" />
				) : (
					<div>
						{!isCheckAnswer && <div className="overlay"></div>}
						<Progress percent={percent} />
						{word.status === 400 ? (
							<>
								{playAudio(completeSound)}
								<Empty description={<span>{word.error}</span>} />
							</>
						) : (
							<>
								<QuestionSuggestion word={word} />
								{questionType === 0 ? (
									<QuizQuestion word={word} setUserAnswer={setUserAnswer} />
								) : (
									<WordFillQuestion
										word={word}
										setUserAnswer={setUserAnswer}
										userAnswer={userAnswer}
									/>
								)}
							</>
						)}
					</div>
				)}
			</div>
			<AnswerCheckBar
				handleOnCheckAnswer={handleOnCheckAnswer}
				userAnswer={userAnswer}
				isCheckAnswer={isCheckAnswer}
				setIsCheckAnswer={setIsCheckAnswer}
				isCorrectAnswer={isCorrectAnswer}
				handleChangeWordReview={handleChangeWordReview}
				isCompleted={isCompleted}
			/>
		</>
	);
}

ReviewPage.propTypes = {};

export default ReviewPage;
