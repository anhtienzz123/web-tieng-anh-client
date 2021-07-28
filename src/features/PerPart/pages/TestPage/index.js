import { DoubleRightOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Image, Row, Space, Typography } from "antd";
import ButtonCustom from "features/PerPart/components/ButtonCustom";
import QuestionOfPart1_2 from "features/PerPart/components/QuestionOfPart1_2";
import QuestionOfPart5 from "features/PerPart/components/QuestionOfPart5";
import {
  fetchQuestionsOfPart,
  restoreQuestionsDefault,
  setSelectedIndexNext,
} from "features/PerPart/perPartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";
import { number } from "yup/lib/locale";
import "./style.scss";

const { Title } = Typography;

TestPage.propTypes = {};

function TestPage(props) {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { questions, selectedIndex } = useSelector((state) => state.perPart);
  const selectedQuestion = questions[selectedIndex];

  const { examSlug, numberPart } = match.params;

  const [choice, setChoice] = useState("");

  const handleAnswerClick = (answer) => {
    setChoice(answer.toLowerCase());
  };

  const handleQuestionNext = () => {
    dispatch(setSelectedIndexNext());
    setChoice("");
  };

  useEffect(() => {
    dispatch(fetchQuestionsOfPart({ numberPart, examSlug }));

    return () => {
      dispatch(restoreQuestionsDefault());
    };
  }, []);

  return (
    <div id="test-page">
      {questions.length > 0 && selectedIndex === questions.length ? (
        <Redirect to={`${numberPart}/finish`} />
      ) : (
        <div className="main">
          <div className="questions">
            <div style={{ marginBottom: "10px" }}>
              <Button shape="round" size="large" style={{ height: "auto" }}>
                Câu {selectedIndex + 1}/{questions.length}.
              </Button>
            </div>

            {(numberPart === "1" || numberPart === "2") && (
              <QuestionOfPart1_2
                question={selectedQuestion}
                choice={choice}
                onAnswerClick={handleAnswerClick}
              />
            )}

            {numberPart === "5" && (
              <QuestionOfPart5
                question={selectedQuestion}
                choice={choice}
                onAnswerClick={handleAnswerClick}
              />
            )}

            {choice && (
              <div className="button-next">
                <Button
                  icon={<DoubleRightOutlined />}
                  style={{ width: "100%", height: "50px" }}
                  danger
                  onClick={handleQuestionNext}
                >
                  Câu tiếp
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TestPage;
