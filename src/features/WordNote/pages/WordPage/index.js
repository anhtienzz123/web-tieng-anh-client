import { Col, Divider, Empty, Result, Row } from "antd";
import Title from "antd/lib/typography/Title";
import WordList from "features/Courses/components/WordList";
import { getWordNoteDetail } from "features/WordNote/wordNoteSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

WordPage.propTypes = {};

function WordPage(props) {
	const { wordnoteId } = useParams();
	const dispatch = useDispatch();
	const { isError, wordNoteDetail } = useSelector((state) => state.wordNote);
	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(getWordNoteDetail(wordnoteId));
	}, []);
	return (
		<div id="word-page">
			<Row justify="start">
				<Col>
					<Title>{isError ? "Wordnote detail" : wordNoteDetail.name}</Title>
				</Col>
			</Row>

			<Divider />
			{isError ? (
				<Result status="404" title="400" subTitle="An error has occurred" />
			) : (
				<>
					{wordNoteDetail.words.length > 0 ? (
						<WordList
							data={wordNoteDetail.words}
							isWordNote={true}
							wordnoteId={wordNoteDetail.id}
						/>
					) : (
						<Empty description={<span>This wordnote has no words</span>} />
					)}
				</>
			)}
		</div>
	);
}

export default WordPage;
