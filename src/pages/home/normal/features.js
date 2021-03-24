import React from "react";
import { Col, Container, Row } from "reactstrap";

export default () => {
  return (
    <section className="features">
      <Container>
        <Row>
          <Col className="feature">
            <h4>5,80,423</h4>
            <p>Students Love Us</p>
          </Col>
          <Col className="feature">
            <h4>30,97,65,476</h4>
            <p>Questions Attempted</p>
          </Col>
          <Col className="feature">
            <h4>60,82,253</h4>
            <p>Tests Attempted</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
