import { Alert, Col, Image, Row, Space, Typography } from "antd";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import ButtonCustom from "../ButtonCustom";
import EmptyButton from "../EmptyButtonList";
import "./style.scss";

const { Title, Text } = Typography;

QuestionOfPart5.propTypes = {
  question: PropTypes.object,
  choice: PropTypes.string,
  onAnswerClick: PropTypes.func,
};

QuestionOfPart5.defaultProps = {
  question: {},
  choice: "",
  onAnswerClick: null,
};

function QuestionOfPart5({ question, choice, onAnswerClick }) {
  const { stt, content, a, b, c, d, result, extra } = question;

  const handleAnswerClick = (answer) => {
    if (!onAnswerClick) return;

    onAnswerClick(answer);
  };

  return (
    <div className="question-of-part-5">
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <div className="question-part-5__content">
          <Text style={{ fontSize: "18px" }}>{content}</Text>
        </div>

        <div className="buttons">
          <Row gutter={[8, 24]}>
            <Col span={12}>
              <ButtonCustom
                content={a}
                type={
                  choice && result === "a"
                    ? "primary"
                    : choice === "a"
                    ? "danger"
                    : "default"
                }
                onClick={() => handleAnswerClick("a")}
              />
            </Col>

            <Col span={12}>
              <ButtonCustom
                content={b}
                type={
                  choice && result === "b"
                    ? "primary"
                    : choice === "b"
                    ? "danger"
                    : "default"
                }
                onClick={() => handleAnswerClick("b")}
              />
            </Col>

            <Col span={12}>
              <ButtonCustom
                content={c}
                type={
                  choice && result === "c"
                    ? "primary"
                    : choice === "c"
                    ? "danger"
                    : "default"
                }
                onClick={() => handleAnswerClick("c")}
              />
            </Col>

            <Col span={12}>
              <ButtonCustom
                content={d}
                type={
                  choice && result === "d"
                    ? "primary"
                    : choice === "d"
                    ? "danger"
                    : "default"
                }
                onClick={() => handleAnswerClick("d")}
              />
            </Col>
          </Row>
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

export default QuestionOfPart5;
