import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "reactstrap";
import api from "../../../services/api";

export default () => {
  const [jobs, setJobs] = useState(null);
  const [job, setJob] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/auth/all_jobs");
      handleJob(res.jobs[0]);
      setJobs(res.jobs);
    })();
  }, []);

  const handleJob = (v) => {
    setJob(v);
    setCourses(v.job_courses);
  };

  // console.log(job, jobs);

  if (!jobs || !jobs.length) return <Container>Loading...</Container>;

  return (
    <div className="courses">
      <Container>
        <div className="heading">
          <h2>Explore our range of courses</h2>
          <p>Select your exam below and give an immediate push to your preparation</p>
        </div>
        <Row>
          <Col className="left-section">
            <h2>All Jobs</h2>
            {jobs.map((e) => (
              <Badge onClick={() => handleJob(e)} className={e.id === job.id && "active"}>
                {e.title}
              </Badge>
            ))}
          </Col>
          <Col className="right-section">
            <h2>{job.title}</h2>
            {courses.map((e) => (
              <Badge>{e.courses[0].name || e.courses[0].id}</Badge>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
