import React, { useContext, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import Instructions from "./instructions";
import ExamInstructions from "./examInstructions";
import Questions from "./questions";
import Result from "./result";

import { AppContext } from "./context";

export default () => {
  const { next, prev, step, setStep, questions, index, values, setValues, result, setResult, setStart } = useContext(AppContext);

  if (result) return <Result />;

  return (
    <Col className="exam-main">
      <TabContent activeTab={step} style={{ height: "calc(100% - 60px)", overflowY: "auto" }}>
        <TabPane tabId="1">
          <Instructions />
        </TabPane>
        <TabPane tabId="2">
          <ExamInstructions />
        </TabPane>
        <TabPane tabId="3" style={{ height: "100%" }}>
          <Questions />
        </TabPane>
      </TabContent>
      <div className="footer">
        <div>
          {step === "2" && (
            <button className="footer-button" onClick={() => setStep("1")}>
              Prev
            </button>
          )}
          {step === "3" && (
            <button className="footer-button" onClick={prev}>
              Prev
            </button>
          )}
          {step === "3" && (
            <button className="footer-button" onClick={() => next({ id: questions[index].id, answer: null, marked: true })}>
              mark for review & next
            </button>
          )}
        </div>
        <div>
          {step === "1" && (
            <button className="footer-button" onClick={() => setStep("2")}>
              Next
            </button>
          )}
          {step === "2" && (
            <button
              className="footer-button"
              onClick={() => {
                setStep("3");
                setStart(true);
              }}
            >
              I am ready to bigin
            </button>
          )}
          {step === "3" && (
            <button className="footer-button" onClick={() => next()}>
              save & next
            </button>
          )}
          {/* {questions.length === values.length && (
            <button className="footer-button"
              onClick={() => {
                next();
                setResult(true);
              }}
            >
              save & View Results
            </button>
          )} */}
        </div>
      </div>
    </Col>
  );
};
