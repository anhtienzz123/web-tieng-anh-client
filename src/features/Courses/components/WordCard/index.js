import { PlusOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip, Typography } from "antd";
import AudioButton from "components/AudioButton";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
function WordCard(props) {
	const { word } = props;

	const { sound, image, name, type, pronounce, definition, example, mean } =
		word;
	const { Title } = Typography;

	return (
		<div className="word-card">
			<div className="word-card__image">
				<img src={image} alt="Oops ... Not found" />
			</div>
			<div className="word-card__content">
				<div className="header">
					<div className="header__left">
						<Title level={2}>
							<Space>
								<AudioButton audioUrl={sound} color={"#28a745"} />
								<span>{name}</span>
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
					{mean.length > 0 && (
						<div className="box__detail">
							<div className="text-box--fat">{mean}</div>
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
