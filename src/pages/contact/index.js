import React from "react";
import { Col, Container, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field } from "formik";
import { toastr } from "react-redux-toastr";

import api from "../../services/api";

export default () => {
  return (
    <Container style={{ padding: "4rem 15px" }}>
      <Col md={{ size: 6, offset: 3 }}>
        <div style={{ marginBottom: "3rem" }}>
          <h2>Contact</h2>
          <p>
            Welcome to Custom Service Center, your one-stop-shop to track the progress of your open tickets, retain records of closed issues, search
            for answers to your questions in the knowledge base and submit questions and feedback directly to our team.
          </p>
          <p>
            Due to hight increase in the volume of requests, our response time may be extended. Please note that currently it may take up to 24 hours
            for us to get back to you. We are working to handle all inquiries as quickly as possible and thank you for your patience and understanding
            during this time.
          </p>
        </div>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={async (values, { resetForm }) => {
            try {
              await api.post("/auth/contact", values);
              toastr.success("You have successfully submitted the ticket!", "Our support team will respond your query within 24 Hours Thank you");
            } catch (e) {
              console.log(e);
            }
            resetForm({});
          }}
        >
          {({ values, handleChange, handleSubmit, isValid, isSubmitting, errors }) => (
            <>
              <FormGroup>
                <Label>Your name</Label>
                <Field
                  className="form-control"
                  validate={(v) => !v.length && "Field is required"}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.name}</div>
              </FormGroup>
              <FormGroup>
                <Label>Your email</Label>
                <Field
                  className="form-control"
                  validate={(v) => !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) && "Email is incorrect"}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.email}</div>
              </FormGroup>
              <FormGroup>
                <Label>Subject</Label>
                <Field
                  className="form-control"
                  validate={(v) => !v.length && "Field is required"}
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.subject}</div>
              </FormGroup>
              <FormGroup>
                <Label>Your message</Label>
                <Field
                  className="form-control"
                  validate={(v) => !v.length && "Field is required"}
                  component="textarea"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{errors.message}</div>
              </FormGroup>
              <Button disabled={isSubmitting} onClick={handleSubmit} color="success">
                Click here to open your ticket
              </Button>
            </>
          )}
        </Formik>
      </Col>
    </Container>
  );
};
