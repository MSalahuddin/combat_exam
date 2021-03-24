import React from "react";
import { Field, Formik } from "formik";
import { FormGroup, Label, Col, Row } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../../redux/auth/actions";
import api from "../../services/api";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  return (
    <div>
      <h2 style={{ fontSize: 22, marginBottom: 30 }}>Edit Account details</h2>
      <Formik
        initialValues={user}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          // const { access_token, user } = await api.post("/auth/signup", values);
          // dispatch(setUser(user));
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label>First name</Label>
                  <Field className="form-control" name="name" value={values.name} onChange={handleChange} />
                </FormGroup>
              </Col>
              {/* <Col>
                <FormGroup>
                  <Label>Last name</Label>
                  <Field className="form-control" name="lastname" value={values.lastname} onChange={handleChange} />
                </FormGroup>
              </Col> */}
            </Row>
            <FormGroup>
              <Label>Email address</Label>
              <Field className="form-control" type="email" name="email" value={values.email} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Mobile number</Label>
              <Field className="form-control" type="tel" name="phone" value={values.phone} onChange={handleChange} />
            </FormGroup>
            <button className="button">Save</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
