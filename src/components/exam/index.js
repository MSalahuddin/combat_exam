import React, { useContext, useEffect, useState } from "react";
import { Row } from "reactstrap";

import Main from "./main";
import Sidebar from "./sidebar";

import App, { AppContext } from "./context";

import api from "../../services/api";

import "./index.scss";

// const screen = window.screen;
export default ({ value, onChange }) => {
  const { practice, section } = value;
  // console.log(value);

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#launcher").style.display = "none";
    return () => {
      document.querySelector("#launcher").style.display = "block";
      document.querySelector("body").style.overflow = "auto";
    };
  }, []);

  async function handleChange(data) {
    console.log(data);
    await api.post("/auth/save_result", data);
    // onChange();
  }

  return (
    <App value={value} onChange={handleChange}>
      <div className="exam-window">
        <AppWithContext value={value} onClose={onChange} />
      </div>
    </App>
  );
};

const AppWithContext = ({ value, onClose }) => {
  const { start, questions, time, setTime } = useContext(AppContext);

  function renderTime() {
    if (start) {
      return <Timer timecount={questions.length} value={time} onChange={setTime} />;
    } else {
      return <TimeLeft value={time} />;
    }
  }

  return (
    <div className="exam">
      <div className="exam-header">
        {/* <div>{value.course.name}</div> */}
        {renderTime()}
        <div onClick={onClose} style={{ cursor: "pointer" }}>
          Close
        </div>
      </div>
      <Row noGutters style={{ height: "calc(100% - 70px)", flexGrow: 2, margin: 0 }}>
        <Main />
        <Sidebar />
      </Row>
    </div>
  );
};

const Timer = ({ timecount = 45, value, onChange }) => {
  useEffect(() => {
    let timer = timecount * 60;
    let minutes = 0;
    let seconds = 0;
    let counter = window.setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      onChange({ minutes, seconds });

      if (--timer < 0) timer = timecount;
    }, 1000);
    return () => window.clearInterval(counter);
  }, [timecount]);

  const { minutes, seconds } = value;
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
      <div className="exam-time">
        Time left
        <div>{minutes}</div>
        {":"}
        <div>{seconds}</div>
      </div>
      <span>Pause time</span>
    </div>
  );
};

const TimeLeft = ({ value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
      <div className="exam-time">
        Time left
        <div>{value.minutes}</div>
        {":"}
        <div>{value.seconds}</div>
      </div>
    </div>
  );
};
