import React, { useContext, useState } from "react";
import { Col } from "reactstrap";
import { useSelector } from "react-redux";
import classnames from "classnames";

import { AppContext } from "./context";

export default () => {
  const { questions, index, values, step, submit, result } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.Auth.user);

  return (
    <Col className={classnames({ open: open }, "exam-sidebar")}>
      <div className="toggle-btn" onClick={() => setOpen(!open)} />
      <div className="sidebar-title">Hello, {user.name}</div>
      <React.Fragment>
        {(step === "3" && (
          <React.Fragment>
            <div className="answer-status">
              <div>
                <span style={{ background: "#3b0269", color: "#fff" }}>{values.filter((e) => !!e.marked).length || 0}</span>
                Marked
              </div>
              <div>
                <span style={{ background: "#022f69", color: "#fff" }}>{values.filter((e) => e.answer && e.marked).length || 0}</span>
                Marked and answered
              </div>
              <div>
                <span style={{ background: "#0aa000", color: "#fff" }}>{values.filter((e) => e.answer).length || 0}</span>
                Answered
              </div>
              <div>
                <span style={{ background: "#dc0000", color: "#fff" }}>{questions.length - values.filter((e) => e.answer).length}</span>
                Not Answered
              </div>
              <div>
                <span>{values.length && values.length < questions.length ? questions.length - values.length : 0}</span>
                Not visited
              </div>
            </div>

            <div className="answer-sheet">
              {questions.map((e, i) => {
                const notAnswered = values.find((n) => n.id === e.id) && values.find((n) => n.id === e.id)?.answer === null;
                const answered = values.find((n) => n.id === e.id)?.answer;
                const marked = values.find((n) => n.id === e.id)?.marked;
                const markedAndAnswered = values.find((n) => n.id === e.id)?.answer && values.find((n) => n.id === e.id)?.marked;
                return (
                  <div>
                    <span
                      style={{
                        background:
                          (markedAndAnswered && "#022f69") ||
                          (marked && "#3b0269") ||
                          (notAnswered && "#dc0000") ||
                          (answered && "#0aa000") ||
                          (index === i && "#eee"),
                        color:
                          (markedAndAnswered && "#fff") ||
                          (marked && "#fff") ||
                          (notAnswered && "#fff") ||
                          (answered && "#fff") ||
                          (index === i && "#000"),
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        )) || <p className="px-3">Welcome to COMBAT EXAM</p>}
        {!!values.length && !result && (
          <div className="exam-sidebar-footer">
            {/* <div>
            <button>question paper</button>
            <button>instructions</button>
          </div> */}
            <button className="exam-sidebar-footer-button" onClick={submit}>
              submit test
            </button>
          </div>
        )}
      </React.Fragment>
    </Col>
  );
};
