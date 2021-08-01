import { Empty, Result } from "antd";
import { WordList, WordNoteHeader } from "features/WordNote/common";
import { getWordNoteDetail } from "features/WordNote/wordNoteSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function WordPage(props) {
	const { wordnoteId } = useParams();
	const dispatch = useDispatch();
	const { isError, wordNoteDetail } = useSelector((state) => state.wordNote);

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(getWordNoteDetail(wordnoteId));
		const temp = [];
	}, []);

	return (
		<div id="word-page">
			<WordNoteHeader
				isError={isError}
				wordNoteDetail={wordNoteDetail}
				goBackUrl={"/wordnotes"}
			/>

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
						<Empty
							description={<span>This wordnote doesn't have any words</span>}
						/>
					)}
				</>
			)}
		</div>
	);
}

WordPage.propTypes = {};

export default WordPage;
