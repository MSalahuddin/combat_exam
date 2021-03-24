import React from "react";
import { Field, Formik } from "formik";
import { FormGroup, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../../../redux/auth/actions";
import api from "../../../services/api";

import "./index.scss";
import { toastr } from "react-redux-toastr";

export default ({ title = "Create Account", value, onChange }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="quick-login">
      <h2 className="title">{title}</h2>
      <div className="close-btn" onClick={onChange} />
      <Formik
        initialValues={{
          name: "",
          phone: "",
        }}
        validateOnMount={true}
        onSubmit={async (values, { setSubmitting }) => {
          // console.log(values);
          await api.post("/auth/save_phone", { ...values, ...value });
          // const { access_token, user } = await api.post("/auth/login", { email: "ali@gmail.com", password: "12345678" });
          // api.setToken(access_token);
          toastr.success("successfully saved!");
          dispatch(setUser(values));
          // history.push("/");
          onChange(values);
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors, values, isValid }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name*</Label>
              <Field validate={(v) => !v.length} className="form-control" name="name" value={values.name} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Mobile number*</Label>
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
            <button className="button" disabled={!isValid || isSubmitting}>
              Lets go
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
