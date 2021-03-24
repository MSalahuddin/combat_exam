import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import "./index.scss";

export default () => {
  return (
    <div className="footer">
      <Container>
        <div className="start-exam">
          <div>
            <h2>Start Your Exam Preparation Now!</h2>
            <p>Take a first step towards acing your exam.</p>
          </div>
          <Link className="get-started" to="/packages">
            Get Started
          </Link>
        </div>
        <h2>Exams</h2>
        <Row tag="ul">
          <Col tag="li" md={3}>
            <Link to="/">Online lectures</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">FPSC</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">CSS</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">FIA</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">1 paper MCQs packages</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">PPSC</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">PMS</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">Free Books</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/packages">Exam Packs</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">KPPSC</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">PMS KPPSC</Link>
          </Col>
          <Col tag="li" md={3}>
            <Link to="/">SPSC</Link>
          </Col>
        </Row>
        <Row style={{ marginTop: 80 }}>
          <Col>
            <ul className="contact-list">
              <li>
                <Link to="/contact">Contact us via Support Ticket</Link>
              </li>
              <li>
                Email: &nbsp;
                <a href="mailto:support@combatexam.zendesk.com">support@combatexam.zendesk.com</a>
              </li>
              <li>
                Help Line:&nbsp;
                <a href="tel:03211487878">0321 1487878</a>
              </li>
              <li>Address: 916 C Faisal Town Showk Chowk Lahore</li>
            </ul>
            <p>
              Available From: <br /> MONDAY - SATURDAY (10AM - 8PM)
            </p>
          </Col>
          <Col>
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h2>Resources</h2>
            <ul>
              <li>
                <Link to="/">Combat Exam Pro 2021</Link>
              </li>
              <li>
                <Link to="/">Combat Exam 6 Months Plan 2021</Link>
              </li>
              <li>
                <Link to="/">Mock Exams Pro</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <p className="copyright">© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
      </Container>
    </div>
  );
};
