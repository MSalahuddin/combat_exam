import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import classnames from "classnames";

import Exam from "../../../components/exam";

import api from "../../../services/api";
// import { Link } from "react-router-dom";

export default ({ match }) => {
  const [commission, setCommission] = useState(null);
  const [commissions, setCommissions] = useState(null);
  const [practices, setPractices] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load(obj = {}) {
    setLoading(true);
    const { practices, jobs, selected_job, commissions } = await api.post("/auth/commissions", obj);
    if (jobs.length) {
      setPractices(practices);
      setJobs(jobs);
      setJob(selected_job);
      setCommissions(commissions);
      setCommission(jobs.find((e) => selected_job.id === e.id).commission_id);
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      load();
    })();
  }, []);

  // console.log("RENDER");

  if (!commission) return <Container style={{ padding: "20px 0" }}>Loading...</Container>;

  return (
    <Container style={{ padding: "20px 0" }}>
      <div className="tabs">
        {Object.keys(commissions).map((e, i) => (
          <div className={classnames({ active: commission == e }, "tab")} onClick={() => load({ commission_id: +e })}>
            {commissions[e]}
          </div>
        ))}
      </div>
      <div className="tags">
        {jobs.map((e) => (
          <span className={classnames({ active: job.id === e.id })} onClick={() => load({ commission_id: commission, job_id: e.id })}>
            {e.title}
          </span>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {/* <Row>
        <Col className="left-section">
          <h2>All courses</h2>
          {courses.map((e) => (
            <Badge onClick={() => setCourse(e)} className={e.id === course.id && "active"}>
              {e.name}
            </Badge>
          ))}
        </Col>
        <Col className="right-section">
          <h2>{course.name}</h2>
          {sections.map((e) => (
            <Badge onClick={() => setSection(e)} className={e.id === section.id && "active"}>
              {e.name}
            </Badge>
          ))}
        </Col>
      </Row> */}
      <div className="tab-section">
        <div className="details">
          <h2>{job.title}</h2>
          <p>Try Practices from below and check your standing</p>
        </div>
        <div className="mock-title">
          <span>PRE MOCK TESTS</span>
        </div>
        <Row>
          {practices.map((e) => (
            <Col md={3}>
              <Card value={e} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

const Card = ({ value }) => {
  const [loading, setLoading] = useState(false);
  const [exam, setExam] = useState(null);

  const { course_id, section_id, id } = value;

  const takeTest = async () => {
    setLoading(true);
    const res = await api.post("/auth/questions", { course_id, section_id, practice_id: id });
    setExam(res);
    setLoading(false);
  };

  return (
    <div className="card-wrapper">
      {exam && <Exam value={exam} onChange={() => setExam(null)} />}
      <h4>
        {value.name} <span style={{ marginLeft: 5 }}>(price)</span>
      </h4>
      <p className="time">
        AVAILABLE TILL <span>22 June, 2020</span>
      </p>
      <p className="available">
        AVAILABLE IN <span>English</span>
      </p>
      <p className="total">
        Total Tests: <span>Extensive Practice, Mock Tests & Past Papers</span>
      </p>
      <div className="buttons">
        <button>View Details</button>
        <button>Buy</button>
        <button disabled={loading} onClick={takeTest}>
          {loading ? <Spinner size="sm" /> : "Take Free Test"}
        </button>
      </div>
    </div>
  );
};
