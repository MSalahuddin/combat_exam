import React, { useEffect, useState } from "react";
import { Col, FormGroup, Label, Row, Spinner, Container } from "reactstrap";
import "react-image-gallery/styles/scss/image-gallery.scss";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { toastr } from "react-redux-toastr";

export default (props) => {
  const user = useSelector((state) => state.Auth.user);
  console.log("🚀 ~ file: orderForm.js ~ line 11 ~ user", user);
  const bookData = props.location?.state?.bookData;
  console.log("🚀 ~ file: orderForm.js ~ line 12 ~ bookData", bookData);

  return (
    <div className="form-order">
      <Container>
        <h2>Books Order From</h2>
        <Row>
          <Col md={12}>
            <Formik
              initialValues={{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.institute_address,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                let payload = {
                  name: values.name,
                  email: values.email,
                  mobile: values.phone,
                  delivery_address: values.address,
                  order_items: {
                    bookID: [bookData.id],
                    qty: ["1"],
                    prices: [bookData.price],
                  },
                };
                try {
                  const res = await api.post("/books_order", payload);
                  if (res.status !== 200) throw res;
                  toastr.success("successfully Logged in");
                } catch (e) {
                  if (e.message) toastr.error(e.message);
                }
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
                  <div className="order-form">
                    <FormGroup>
                      <p>Name</p>
                      <Field
                        className="form-control"
                        placeholder="Enter name"
                        validate={(v) => !v?.length && "Field is required"}
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <div style={{ color: "red" }}>{errors.name}</div>
                    </FormGroup>
                    <FormGroup>
                      <p>Email</p>
                      <Field
                        className="form-control"
                        type="email"
                        name="email"
                        validate={(v) => !v?.length && "Field is required"}
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <div style={{ color: "red" }}>{errors.email}</div>
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
                      <div style={{ color: "red" }}>{errors.phone}</div>
                    </FormGroup>
                    <FormGroup>
                      <p>Delivery Address</p>
                      <Field
                        className="form-control"
                        type="address"
                        validate={(v) => !v?.length && "Field is required"}
                        name="address"
                        placeholder="Enter delivery address"
                        value={values.address}
                        onChange={handleChange}
                      />
                      <div style={{ color: "red" }}>{errors.address}</div>
                    </FormGroup>
                    <div className="tableContainer">
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
                            <td>{bookData.title}</td>
                            <td>{bookData.book_id}</td>
                            <td>1</td>
                            <td>{bookData.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="button-div bg-white">
                    <button className="button">Pay Now</button>
                  </div>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
