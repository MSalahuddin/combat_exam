import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import {  Link } from "react-router-dom";
import "./signUp.scss";
export default ()=> {
  return (
    <div class="main">
      <Form className="xyz">
        <h3 style={{ paddingBottom: "5px", textAlign: "center" }}>
          Create an account
        </h3>
        <FormGroup>
          <Input
            type="text"
            name="full name"
            id="full-name"
            placeholder="Full Name"
          />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="number"
                id="number"
                placeholder="Mobile#"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input type="select" name="province" id="province">
                <option>Province</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Blochistan</option>
                <option>Gilgit</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                type="institute-name"
                name="institute-name"
                id="institute-name"
                placeholder="Institute Name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="institute-address"
                name="institute-address"
                id="institute-address"
                placeholder="Institute Address"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input type="select" name="branch" id="branch">
                <option>Institute</option>
                <option>University</option>
                <option>College</option>
                <option>School</option>
                <option>Coaching Center</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input type="select" name="gender" id="gender">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="checkbox" />
          <Label for="checkbox" check>
            I agree on Terms & Conditions
          </Label>
        </FormGroup>
        <FormGroup>
          <button className="signUP">Sign up</button>
          <div className="endpoint">
            Already have an account?
            <Link to="/institute-login">
              <span className="link"> Sign In</span>
            </Link>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
}