// import React from "react";
// import { Field, Formik } from "formik";
// import { FormGroup, Label, Col, Row } from "reactstrap";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { setUser } from "../../../redux/auth/actions";
// import api from "../../../services/api";

// import "./index.scss";
// import { toastr } from "react-redux-toastr";

// export default ({ title = "Create Account", onChange, setScreen }) => {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   return (
//     <div className="signup">
//       <h2 className="title">{title}</h2>
//       <div className="close-btn" onClick={onChange} />
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           phone: "",
//           city: "",
//           province: "",
//           password: "",
//           passwordconfirmation: "",
//         }}
//         onSubmit={async (values, { setSubmitting }) => {
//           try {
//             console.log(values);
//             const res = await api.post("/auth/signup", values);
//             if (res.status !== 200) throw res;
//             api.setToken(res.access_token);
//             dispatch(setUser(res.user));
//             history.push("/dashboard");
//             onChange();
//           } catch (e) {
//             console.log(e);
//             if (e.message) toastr.error(e.message);
//           }
//         }}
//       >
//         {({ handleChange, handleSubmit, isSubmitting, errors, values }) => (
//           <form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label>Name</Label>
//               <Field className="form-control" name="name" value={values.name} onChange={handleChange} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Email address</Label>
//               <Field className="form-control" type="email" name="email" value={values.email} onChange={handleChange} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Mobile number</Label>
//               <Field className="form-control" type="tel" name="phone" value={values.phone} onChange={handleChange} />
//             </FormGroup>
//             <FormGroup>
//               <Label>City</Label>
//               <Field className="form-control" name="city" value={values.city} onChange={handleChange} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Province</Label>
//               <Field component="select" className="form-control" name="province" value={values.province} onChange={handleChange}>
//                 <option>--select--</option>
//                 <option>Punjab</option>
//                 <option>Sindh</option>
//                 <option>KPK</option>
//                 <option>Blochistan</option>
//                 <option>Gilgit</option>
//               </Field>
//             </FormGroup>
//             <FormGroup>
//               <Label>Password</Label>
//               <Field className="form-control" type="password" name="password" value={values.password} onChange={handleChange} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Confirm Password</Label>
//               <Field
//                 className="form-control"
//                 type="password"
//                 name="passwordconfirmation"
//                 value={values.passwordconfirmation}
//                 onChange={handleChange}
//               />
//             </FormGroup>
//             <button className="button">Sign up</button>
//           </form>
//         )}
//       </Formik>
//       <div className="action-line">
//         Already have account ? <span onClick={() => setScreen("login")}>Login</span>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Field, Formik } from "formik";
import { FormGroup, Label, Col, Row, Input } from "reactstrap";
import { useHistory,Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../../../redux/auth/actions";
import api from "../../../services/api";

import "./index.scss";
import { toastr } from "react-redux-toastr";

export default ({ title = "Create Account", onChange, setScreen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="signup">
      <h2 className="title">{title}</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          city: "",
          province: "",
          password: "",
          passwordconfirmation: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            console.log(values);
            const res = await api.post("/auth/signup", values);
            if (res.status !== 200) throw res;
            api.setToken(res.access_token);
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
          <form onSubmit={handleSubmit} style={{ width: "40%" }}>
            <FormGroup>
              <Label>Name</Label>
              <Field
                className="form-control"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email address</Label>
              <Field
                className="form-control"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Mobile number</Label>
              <Field
                className="form-control"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>City</Label>
              <Field
                className="form-control"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Province</Label>
              <Field
                component="select"
                className="form-control"
                name="province"
                value={values.province}
                onChange={handleChange}
              >
                <option>--select--</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Blochistan</option>
                <option>Gilgit</option>
              </Field>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Field
                className="form-control"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Field
                className="form-control"
                type="password"
                name="passwordconfirmation"
                value={values.passwordconfirmation}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="check" id="checkbox" />
              <Label for="checkbox" check>
                I agree on Terms & Conditions
              </Label>
            </FormGroup>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="button">Sign up</button>
            </div>
          </form>
        )}
      </Formik>
      <div className="action-line">
        Already have account ?
        <Link to="/student-login">
          {" "}
          <span>Login</span>{" "}
        </Link>
      </div>
    </div>
  );
};
