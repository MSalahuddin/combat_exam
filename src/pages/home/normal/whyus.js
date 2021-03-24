import React from "react";
import { Col, Container, Row } from "reactstrap";

import IMG1 from "../../../assets/lecture.svg";
import IMG2 from "../../../assets/mock.svg";
import IMG3 from "../../../assets/past-papers.svg";
import IMG4 from "../../../assets/practice.svg";
import IMG5 from "../../../assets/stats.svg";
import IMG6 from "../../../assets/stopwatch.svg";

export default () => {
  return (
    <section className="whyus">
      <Container>
        <div className="heading">
          <h2>Why us ?</h2>
          <p>We work hard to make sure you get maximum worth of your money. Check our features below.</p>
        </div>
        <Row>
          <Col className="why-box" md={4}>
            <div className="how-icon" style={{ backgroundImage: `url(${IMG1})` }} />
            <h4>Online Classes</h4>
            <p>
              Experienced Professors & Teachers teaches online classes via zoom app in groups of each job. Each Group consists of two months course
              plan and delivers the lectures online. You may contact support to enrol for the online lectures.{" "}
            </p>
          </Col>
          <Col className="why-box" md={4}>
            <div className="how-icon" style={{ backgroundImage: `url(${IMG2})` }} />
            <h4> Mock Exams</h4>
            <p>
              Mock exams of full course & subject wise are available for the aspirants at the dashboard. The test system is designed in such a way
              that you will feel confident in the real exam. Each course is designed according to the current syllabus of Job.
            </p>
          </Col>
          <Col className="why-box" md={4}>
            <div className="how-icon" style={{ backgroundImage: `url(${IMG3})` }} />
            <h4>Original Past Papers</h4>
            <p>
              The original past papers are available at the dashboard where aspirants can get take each paper through testing window of combat exam.
              They will be able to analyse the examiner’s psychology about the testing of knowledge in real exam.
            </p>
          </Col>
          <Col className="why-box" md={4}>
            <div className="how-icon" style={{ backgroundImage: `url(${IMG4})` }} />
            <h4>Extensive Practice</h4>
            <p>
              Combat Exam is offering wide range of practice tests for all courses at the dashboard. Each course have further sections which covers
              the real exam. The aspirants will be able to do the practice as much as they want via testing window.
            </p>
          </Col>
          <Col className="why-box p-0" md={4}>
            <div className="how-icon" style={{ backgroundImage: `url(${IMG5})` }} />
            <h4>Performance & Analytics</h4>
            <p>
              The best part at the dashboard is performance & analytics where you can track your performance & plan accordingly to prepare for the
              exam. This section shows the real time numbers in Score, Percentile , Rank among others , Graphical Representation & much more.
            </p>
          </Col>
          <Col className="why-box" md={4}>
            <div className="how-icon" style={{ backgroundImage: `url(${IMG6})` }} />
            <h4>Time Management</h4>
            <p>
              The testing window of combat exam is designed with advanced tools & industry practices so the aspirant can practice for time management
              in the user -friendly system environment. Time management plays vital role in all competitive exams.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
