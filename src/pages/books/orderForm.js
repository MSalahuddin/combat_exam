import React, { useEffect, useState } from "react";
import { Col, FormGroup, Label, Row, Spinner, Container } from "reactstrap";
import "react-image-gallery/styles/scss/image-gallery.scss";
import api from "../../services/api";
import { Field, Formik } from "formik";
const imageURL = "http://panel.combatexam.com/public/book_images";

export default (props) => {
  return (
    <div className="form-order">
      <Container>
        <h2>Books Order From</h2>
        <Row className="large-thumb">
          <Col md={12}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                // try {
                //   const res = await api.post("/auth/login", values);
                //   if (res.status !== 200) throw res;
                //   api.setToken(res.access_token);
                //   toastr.success("successfully Logged in");
                //   dispatch(setUser(res.user));
                //   history.push("/dashboard");
                //   onChange();
                // } catch (e) {
                //   console.log(e);
                //   if (e.message) toastr.error(e.message);
                // }
              }}
            >
              {({
                handleChange,
                handleSubmit,
                isSubmitting,
                errors,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <p>Name</p>
                    <Field
                      className="form-control"
                      placeholder="Enter name"
                      type="text"
                      name="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <p>Email</p>
                    <Field
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <p>Mobile No.</p>
                    <Field
                      validate={(v) => !v.length || v.length !== 11}
                      maxlength="11"
                      placeholder="03xxxxxxxxx"
                      className="form-control"
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <p>Delivery Address</p>
                    <Field
                      className="form-control"
                      type="address"
                      name="address"
                      placeholder="Enter delivery address"
                      value={values.address}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </form>
              )}
            </Formik>
          </Col>
          <Col md={12}>
            <div
              className="tableContainer"
              style={{ height: 300, marginBottom: 30 }}
            >
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Title of the Book</th>
                    <th>ID</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <div className="button-div">
          <button className="button">Pay Now</button>
        </div>
      </Container>
    </div>
  );
};
