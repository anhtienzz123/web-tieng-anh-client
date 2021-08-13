import { Col, Row } from "antd";
import SearchBar from "features/Translate/components/SearchBar";
import TranslateResult from "features/Translate/components/TranslateResult";
import { fetchTranslates } from "features/Translate/translateSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function MainPage(props) {
	const dispatch = useDispatch();
	const { translateResult } = useSelector((state) => state.translate);
	const [isFirstRender, setIsFirstRender] = useState(true);
	// const translateResult = TRANSLATE_RESULT;

	const handleOnClick = (value) => {
		setIsFirstRender(false);
		dispatch(
			fetchTranslates({
				wordToTranslate: value,
			})
		);
	};

	return (
		<div id="translate-main-page">
			<Row justify="center">
				<Col>
					<img
						src="https://stc-laban.zdn.vn/dictionary/images/logo_dict_1.2.png"
						alt="Oops ... Notfound"
					/>
				</Col>
			</Row>
			<Row justify="center">
				<Col span={24}>
					<SearchBar handleOnClick={handleOnClick} />
				</Col>
			</Row>
			{!isFirstRender && <TranslateResult translateResult={translateResult} />}
		</div>
	);
}
MainPage.propTypes = {};

export default MainPage;
