import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import contestImg from "../../assets/contest.png";

export default () => (
  <div>
    <div className="hero">
      <Container fluid={true}>
        <Row>
          <Col md={7}>
            <Row>
              <Col>
                <h2 style={{ color: "#000", fontWeight: "bold" }}>
                  Welcome To Combat Exam Contest Series
                </h2>
                <p style={{ color: "#000" }}>
                  Join our contest series and win exciting cash prizes.
                  <br /> Submit your entry now!
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link
                  style={{
                    backgroundColor: "#000",
                    border: "0",
                    width: "30%",
                  }}
                  className="button"
                  to="/"
                >
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Submit Your Entry
                  </p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={4} style={{}}>
            <Row>
              <img className="contestImg" src={contestImg} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
