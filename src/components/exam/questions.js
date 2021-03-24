import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

import { AppContext } from "./context";

export default () => {
  const { questions, index, setValues, values, test_name, practice } = useContext(AppContext);

  const q = questions.map((e) => <Question value={e} values={values} onChange={(v) => setValues({ id: e.id, answer: v })} />);
  const name = practice ? ` - ${practice.name}` : "";
  return (
    <div className="exam-questions">
      <div className="header">
        <span>
          {test_name} {name}
        </span>
        {/* Quantitative Aptitude */}
      </div>
      <div className="question-header">
        <div>Question No. {index + 1}</div>
        {/* <div>
          <div>Marks</div>
          <Badge color="success" style={{ padding: "5px 10px", fontSize: 13, margin: "0 5px" }}>
            +1
          </Badge>
          <Badge color="danger" style={{ padding: "5px 10px", fontSize: 13, margin: "0 5px" }}>
            -0.25
          </Badge>
        </div> */}
      </div>
      {q[index]}
    </div>
  );
};

const Question = ({ value, onChange, values }) => {
  const { question, option1, option2, option3, option4, id } = value;

  // const [selected, setSelected] = useState(null);

  const setValue = (v) => {
    // setSelected(v);
    onChange(v);
    // console.log(v);
  };

  const selected = values.find((e) => e.id === id)?.answer;
  // console.log(selected, value);

  return (
    <Row className="question-body">
      {/* {question.directions && (
        <Col style={{ borderRight: "1px solid #eee", padding: 15, overflowY: "auto", maxHeight: "100%" }}>
          <div dangerouslySetInnerHTML={{ __html: question.directions }}></div>
        </Col>
      )} */}
      <Col style={{ padding: 15, overflowY: "auto", maxHeight: "100%" }}>
        <div>{question}</div>
        <div style={{ padding: "20px 0" }}>
          <div className="option" onClick={() => setValue(option1)}>
            <div
              style={{ background: selected === option1 && "blue", boxShadow: selected === option1 && "0 0 0 3px #fff inset" }}
              className="styled-chebox"
            />
            {option1}
          </div>
          <div className="option" onClick={() => setValue(option2)}>
            <div
              style={{ background: selected === option2 && "blue", boxShadow: selected === option2 && "0 0 0 3px #fff inset" }}
              className="styled-chebox"
            />
            {option2}
          </div>
          <div className="option" onClick={() => setValue(option3)}>
            <div
              style={{ background: selected === option3 && "blue", boxShadow: selected === option3 && "0 0 0 3px #fff inset" }}
              className="styled-chebox"
            />
            {option3}
          </div>
          <div className="option" onClick={() => setValue(option4)}>
            <div
              style={{ background: selected === option4 && "blue", boxShadow: selected === option4 && "0 0 0 3px #fff inset" }}
              className="styled-chebox"
            />
            {option4}
          </div>
        </div>
      </Col>
    </Row>
  );
};
