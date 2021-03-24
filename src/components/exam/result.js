import React, { useContext, useState } from "react";
import { Table, Badge, Container, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

import { AppContext } from "./context";
import Analytics from "./analytics";

export default () => {
  const [active, setActive] = useState("1");
  const { questions, values, time, test_name } = useContext(AppContext);

  const notVisited = values.length && values.length < questions.length ? questions.length - values.length : 0;

  const correct = questions.filter((e, i) => {
    const answer = (values[i] && values.find((n) => n.id === e.id)?.answer) || "";
    return valueToOption(answer, e) === e.correct_option;
  }).length;

  const attempted = values.filter((e) => e.answer).length;
  const accuracy = (correct / questions.length) * 100;
  const timeTaken = `${questions.length - time.minutes - 1}:${60 - time.seconds}`;

  return (
    <Container style={{ padding: "40px 0", maxHeight: "100%", overflowY: "auto" }}>
      <div className="exam-tabs">
        <div className={classnames({ active: active === "1" }, "tab")} onClick={() => setActive("1")}>
          Results
        </div>
        {test_name === "Free test" && (
          <div className={classnames({ active: active === "2" }, "tab")} onClick={() => setActive("2")}>
            Analytics
          </div>
        )}
        <div className={classnames({ active: active === "3" }, "tab")} onClick={() => setActive("3")}>
          Summary
        </div>
      </div>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <Table bordered>
            <thead>
              <tr style={{ background: "#f8fcff" }}>
                <th>Sr.</th>
                <th>Question</th>
                <th>Your answer</th>
                <th>Correct answer</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((e, i) => {
                const answer = (values[i] && values.find((n) => n.id === e.id)?.answer) || "";
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{e.question}</td>
                    <td>{answer || <Badge color="danger">Not answered</Badge>}</td>
                    <td>{optionToValue(e.correct_option, e)}</td>
                    <td>
                      {valueToOption(answer, e) === e.correct_option ? (
                        <Badge color="success">Correct</Badge>
                      ) : (
                        <Badge color="danger">Incorrect</Badge>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TabPane>
        {test_name === "Free test" && (
          <TabPane tabId="2">
            <Analytics />
          </TabPane>
        )}
        <TabPane tabId="3">
          <Table bordered>
            <thead>
              <tr style={{ background: "#f8fcff" }}>
                <th>Answered</th>
                <th>Not Answered</th>
                <th>Marked for review</th>
                <th>Marked for review & answered</th>
                <th>Not Visited</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{values.filter((e) => e.answer).length}</td>
                <td>{questions.length - values.filter((e) => e.answer).length}</td>
                <td>{values.filter((e) => e.marked).length}</td>
                <td>{values.filter((e) => e.answer && e.marked).length}</td>
                <td>{notVisited}</td>
              </tr>
            </tbody>
          </Table>
        </TabPane>
      </TabContent>
    </Container>
  );
};

function optionToValue(value, obj) {
  switch (value) {
    case "A":
      return obj["option1"];
    case "B":
      return obj["option2"];
    case "C":
      return obj["option3"];
    case "D":
      return obj["option4"];
  }
}

function valueToOption(value, obj) {
  const key = Object.keys(obj).find((e) => {
    if (obj[e] === value) return e;
  });

  switch (key) {
    case "option1":
      return "A";
    case "option2":
      return "B";
    case "option3":
      return "C";
    case "option4":
      return "D";
  }
}
