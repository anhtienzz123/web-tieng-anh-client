import { Alert, Col, Image, Row, Space, Typography } from "antd";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import ButtonCustom from "../ButtonCustom";
import EmptyButton from "../EmptyButtonList";
import "./style.scss";

const { Title, Text } = Typography;

QuestionOfPart1_2.propTypes = {
  question: PropTypes.object,
  choice: PropTypes.string,
  onAnswerClick: PropTypes.func,
};

QuestionOfPart1_2.defaultProps = {
  question: {},
  choice: "",
  onAnswerClick: null,
};

function QuestionOfPart1_2({ question, choice, onAnswerClick }) {
  const { stt, content, a, b, c, d, result, extra, audio, type } = question;

  const audioRef = useRef();

  const handleAnswerClick = (answer) => {
    if (!onAnswerClick) return;

    onAnswerClick(answer);
  };

  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.load();
  }

  return (
    <div className="question-of-part-1-2">
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        {type == 1 && (
          <div className="image">
            <Image width={400} height={300} src={content} />
          </div>
        )}

        {type == 2 && (
          <div
            className="question-part-1-2__content"
            style={{ visibility: `${choice ? "visible" : "hidden"}` }}
          >
            <Text style={{ fontSize: "18px" }}>{content}</Text>
          </div>
        )}

        <div className="audio">
          <audio controls ref={audioRef} autoPlay>
            <source src={audio} type="audio/mp3" />
          </audio>
        </div>

        <div className="buttons">
          {choice ? (
            <Row gutter={[8, 24]}>
              <Col span={12}>
                <ButtonCustom
                  content={a}
                  type={
                    result === "a"
                      ? "primary"
                      : choice === "a"
                      ? "danger"
                      : "default"
                  }
                />
              </Col>

              <Col span={12}>
                <ButtonCustom
                  content={b}
                  type={
                    result === "b"
                      ? "primary"
                      : choice === "b"
                      ? "danger"
                      : "default"
                  }
                />
              </Col>

              <Col span={type === 1 ? 12 : 24}>
                <ButtonCustom
                  content={c}
                  type={
                    result === "c"
                      ? "primary"
                      : choice === "c"
                      ? "danger"
                      : "default"
                  }
                />
              </Col>

              <Col span={12}>
                <ButtonCustom
                  content={d}
                  type={
                    result === "d"
                      ? "primary"
                      : choice === "d"
                      ? "danger"
                      : "default"
                  }
                />
              </Col>
            </Row>
          ) : (
            <EmptyButton
              number={type === 1 ? 4 : 3}
              onAnswerClick={handleAnswerClick}
            />
          )}
        </div>

        {choice && extra && (
          <div className="extras">
            <Alert message="Giải thích" description={extra} type="info" />
          </div>
        )}
      </Space>
    </div>
  );
}

export default QuestionOfPart1_2;
