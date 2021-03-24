import React from "react";
import { Row, Col, Container } from "reactstrap";

import Signup from "../../components/auth/signup";

import ICON from "../../assets/latest.png";

export default function Index() {
  return (
    <div className="hero">
      <Container>
        <div className="heading">
          <h2>Mock Exam Title 2020</h2>
          <p>Sign up now for a free mock test!</p>
        </div>
        <Row>
          <Col>
            <Row>
              <div className="benefit">
                <img src={ICON} />
                <h4>Latest Pattern Mock Tests</h4>
                <p>All the mock tests are based on the latest pattern and have top quality content.</p>
              </div>
              <div className="benefit">
                <img src={ICON} />
                <h4>Detailed Solutions</h4>
                <p>Elaborate solutions to every question help you understand your mistakes and in improving your future performance.</p>
              </div>
            </Row>
            <Row>
              <div className="benefit">
                <img src={ICON} />
                <h4>All India Ranking and Personalised Analytics</h4>
                <p>Comparison with thousands of test takers all over the country gives you a better idea about your preparation and progress.</p>
              </div>
              <div className="benefit">
                <img src={ICON} />
                <h4>On your Phone and Computer</h4>
                <p>The mock tests can be attempted on both your computer and our Android App.</p>
              </div>
            </Row>
          </Col>
          <Col md={5}>
            <Signup />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
