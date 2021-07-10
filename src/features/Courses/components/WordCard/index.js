import {
	PlusOutlined,
	SoundFilled,
	SoundOutlined,
	YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Space, Tooltip, Typography } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "./style.scss";
function WordCard(props) {
	const { course, word } = props;

	const [isActive, setIsActive] = useState(false);
	const { url } = useRouteMatch();
	const {
		audioUrl,
		imageUrl,
		vocabulary,
		type,
		pronounce,
		definition,
		example,
		translate,
	} = word;
	const { Title } = Typography;

	function handleSoundClick() {
		setIsActive(true);
		const sound = new Audio(audioUrl);
		sound.play();
		sound.onended = () => {
			setIsActive(false);
		};
	}

	return (
		<div className="word-card">
			<div className="word-card__image">
				<img src={imageUrl} alt="Oops ... Not found" />
			</div>
			<div className="word-card__content">
				<div className="header">
					<div className="header__left">
						<Title level={2}>
							<Space>
								<Tooltip title="Listen">
									<Button
										type="link"
										onClick={handleSoundClick}
										icon={
											isActive ? (
												<SoundFilled
													style={{ color: "#28a745", fontSize: "24px" }}
												/>
											) : (
												<SoundOutlined
													style={{ color: "#28a745", fontSize: "24px" }}
												/>
											)
										}
										size="small"
									/>
								</Tooltip>
								<span>{vocabulary}</span>
							</Space>
						</Title>
					</div>
					<div className="header__right">
						<Space wrap>
							<Tooltip title="Context">
								<Button
									style={{ background: "#fd7e14", border: "#fd7e14" }}
									type="primary"
									icon={<YoutubeOutlined />}
									size="small"
								>
									Context
								</Button>
							</Tooltip>

							<Tooltip title="Add to wordbook">
								<Button type="primary" icon={<PlusOutlined />} size="small">
									Add
								</Button>
							</Tooltip>
						</Space>
					</div>
				</div>
				<div className="pronunciation">
					{type} &nbsp;&nbsp;&nbsp;&nbsp; {pronounce}
				</div>

				<div className="box--large">
					<div className="box__title">Definition</div>
					<div className="box__detail">
						<div className="text-box--fat">{definition}</div>
						<div className="text-box--thin">{example}</div>
					</div>
				</div>

				<div className="box">
					<div className="box__title">Translated by Google</div>
					{translate.length > 0 && (
						<div className="box__detail">
							<div className="text-box--fat">{translate}</div>
						</div>
					)}
				</div>
			</div>
			{/* </Col>
			</Row> */}
		</div>
	);
}

WordCard.propTypes = {
	word: PropTypes.object,
	maxCharacterCount: PropTypes.number,
};
WordCard.defaultProps = {
	word: {
		audioUrl: "",
		imageUrl: "https://cdn.ejoy.io/ea/wordSet/42e.jpg?v=0",
		vocabulary: "website",
		type: "noun",
		pronounce: "/ˈwebˌsɑɪt/",
		definition:
			"a place on the Internet with one or more pages of information about a subject",
		example:
			"His fans created a website, giving every detail of his private life.",
		translate: "Trang mạng",
	},
	maxCharacterCount: 140,
};

export default WordCard;
