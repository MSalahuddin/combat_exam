import React from "react";
import { Field, Formik } from "formik";
import { FormGroup, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toastr } from "react-redux-toastr";

import { setUser } from "../../../redux/auth/actions";

import api from "../../../services/api";

import "./index.scss";

export default ({ onChange, setScreen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="login">
      <h2 className="title">Hey, Welcome Back</h2>
      <div className="close-btn" onClick={onChange} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember_me: false,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await api.post("/auth/login", values);
            if (res.status !== 200) throw res;
            api.setToken(res.access_token);
            toastr.success("successfully Logged in");
            dispatch(setUser(res.user));
            history.push("/dashboard");
            onChange();
          } catch (e) {
            console.log(e);
            if (e.message) toastr.error(e.message);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email address</Label>
              <Field className="form-control" type="email" name="email" value={values.email} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <div className="password-forget">
                <Label>Password</Label>
                <div className="forgot-link" onClick={() => setScreen("forgot")}>
                  Forgot password ?
                </div>
              </div>
              <Field className="form-control" type="password" name="password" value={values.password} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>
                <Field type="checkbox" name="remember_me" checked={values.remember_me} onChange={handleChange} /> Remember me
              </Label>
            </FormGroup>
            <button className="button">Log in</button>
          </form>
        )}
      </Formik>
      <div className="action-line">
        Don't have account ? <span onClick={() => setScreen("signup")}>Signup</span>
      </div>
    </div>
  );
};
