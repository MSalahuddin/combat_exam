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
    <div className="forgot">
      <h2 className="title">Forgot Password?</h2>
      {/* <div className="close-btn" onClick={onChange} /> */}
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await api.post("/auth/forgot", values);
            if (res.status !== 200) throw res;
            api.setToken(res.access_token);
            toastr.success("Successfully submitted password reset request.");
            dispatch(setUser(res.user));
            // history.push("/");
            onChange();
          } catch (e) {
            console.log(e);
            if (e.message) toastr.error(e.message);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors, values }) => (
          <form onSubmit={handleSubmit} style={{ width: "40%" }}>
            <FormGroup>
              <Label>Registered Email Address</Label>
              <Field className="form-control" type="email" name="email" value={values.email} onChange={handleChange} />
            </FormGroup>
            <button className="button">Submit</button>
          </form>
        )}
      </Formik>
      <div className="d-flex justify-content-between">
        <div className="action-line" style={{ marginRight: "20px" }}>
          Don't have account ? <span >Signup</span>
        </div>
        <div className="action-line" >
          Remember password ? <span >Login</span>
        </div>
      </div>
    </div>
  );
};
