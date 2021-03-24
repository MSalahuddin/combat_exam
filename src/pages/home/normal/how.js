import React from "react";
import { Col, Container, Row } from "reactstrap";

import ICON1 from "../../../assets/practice-test.svg";
import ICON2 from "../../../assets/mock-test.svg";
import ICON3 from "../../../assets/papers.svg";

export default () => {
  return (
    <section className="how">
      <Container>
        <Row>
          <Col className="title" md={2}>
            HOW IT WORKS
          </Col>
          <Col className="how-box" md={3}>
            <img src={ICON1} height={50} />
            <h4>Attempt Practice Tests</h4>
            <p>
              The students may attempt the practice tests with testing window to track the performance of their tests. Each course have various
              sections & further each section consists of multiple practice tests.
            </p>
          </Col>
          <Col className="how-box" md={3}>
            <img src={ICON2} height={50} />
            <h4>Attempt Mock Tests</h4>
            <p>
              Combat Exam is offering not only full course mock tests but also offering the subject wise Mock Tests of each course of the Job. All the
              mock tests are in accordance with the current syllabus of commissions.
            </p>
          </Col>
          <Col className="how-box" md={3}>
            <img src={ICON3} height={60} />
            <h4>Attempt Past Papers</h4>
            <p>
              The aspirants may attempt all the past papers via testing window. The original past papers will help them to understand the commission’s
              paper pattern & areas of courses tested . Original Past Papers always helps a lot to students.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
