import { Checkbox, Empty, message, notification } from "antd";
import Modal from "antd/lib/modal/Modal";
import { addToWordNote } from "features/WordNote/wordNoteSlice";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function WordNoteModal(props) {
	const { isModalVisible, setIsModalVisible, wordNoteOptions, wordId } = props;
	const dispatch = useDispatch();
	const [selectedWordNote, setSelectedWordNote] = useState([]);

	function onChange(checkedValues) {
		setSelectedWordNote(checkedValues);
	}

	const handleCancelModal = () => {
		setIsModalVisible(false);
	};

	const openNotificationWithIcon = (type) => {
		notification[type]({
			message: "Warning",
			description: "You need to select at least 1 Wordnote to add",
			style: { backgroundColor: "#ffeeb0" },
		});
	};

	const handleAddToWordNote = () => {
		if (selectedWordNote.length > 0) {
			for (const wordNoteId of selectedWordNote) {
				const wordNoteCategoryId = parseInt(wordNoteId);
				const value = {
					wordNoteCategoryId,
					wordId,
				};
				dispatch(addToWordNote({ value }));
			}

			setIsModalVisible(false);
			message.success("Added to wordnote");
		} else {
			openNotificationWithIcon("warning");
		}
	};

	return (
		<Modal
			title={"Add to Wordnote"}
			centered
			visible={isModalVisible}
			onCancel={handleCancelModal}
			onOk={handleAddToWordNote}
			okText={"Add"}
		>
			{wordNoteOptions.length > 0 ? (
				<Checkbox.Group
					options={wordNoteOptions}
					defaultValue={selectedWordNote}
					onChange={onChange}
				/>
			) : (
				<Empty
					description={
						<span>
							You don't have Wordnote to add.{" "}
							<Link to="/wordnotes">Go to Wordnote</Link>
						</span>
					}
				/>
			)}
		</Modal>
	);
}
WordNoteModal.propTypes = {
	isModalVisible: PropTypes.bool,
	setIsModalVisible: PropTypes.func,
	wordNoteOptions: PropTypes.array,
	wordId: PropTypes.number,
};
WordNoteModal.defaultProps = {
	isModalVisible: false,
	setIsModalVisible: null,
	wordNoteOptions: [],
	wordId: 1,
};

export default WordNoteModal;
