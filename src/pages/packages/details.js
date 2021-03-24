import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from "reactstrap";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { Field, Formik } from "formik";

import { setCart } from "../../redux/auth/actions";

import Exam from "../../components/exam";
import QuickLogin from "../../components/auth/quickLogin";
import Auth from "../../components/auth";

import api from "../../services/api";

export default ({ match }) => {
  const [commission, setCommission] = useState(null);
  const [commissions, setCommissions] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load(obj = {}) {
    setLoading(true);
    const { jobs, commissions } = await api.post("/auth/commissions", obj);
    if (jobs.length) {
      setJobs(jobs);
      setCommissions(commissions);
      setCommission(obj.commission_id || 1);
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      load();
    })();
  }, []);

  // console.log("RENDER");

  if (!commission)
    return <Container style={{ padding: "20px 0" }}>Loading...</Container>;

  return (
    <Container style={{ padding: "20px 0" }}>
      <div className="tabs">
        {Object.keys(commissions).map((e, i) => (
          <div
            className={classnames({ active: e == commission }, "tab")}
            onClick={() => load({ commission_id: +e })}
          >
            {commissions[e]}
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      <div className="tab-section">
        {/* <div className="details">
          <h2>{job.title}</h2>
          <p>Try Practices from below and check your standing</p>
        </div> */}
        <div className="mock-title">
          <span>JOBS AVAILABLE</span>
        </div>
        <Row>
          {jobs.map((e) => (
            <Col md={3}>
              <Card value={e} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

const Card = ({ value }) => {
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [exam, setExam] = useState(null);
  const [login, setLogin] = useState(null);
  const [quickLogin, setQuickLogin] = useState(null);
  const [bank, setBank] = useState(false);

  const user = useSelector((state) => state.Auth.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    available_from,
    available_in,
    price,
    title,
    valid_till,
    id,
    free,
    job_questions,
  } = value;

  // useEffect(() => {
  //   if (user && loading) return buy();
  //   if (user) setExam(value);
  // }, [user, value, loading]);

  const buy = async () => {
    if (!user) return setLogin(true);
    setBank(true);
    // setLoading(true);
    // await api.post("/auth/purchase_specific_job", { job_id: id, user_id: user.id });
    // toastr.success("Job purchased successfully");
    // history.push("/dashboard/purchased_jobs");
    // setLoading(false);
  };

  const addToCart = async (isData) => {
    if (!user) return setLogin(true);
    isData ? setLoading(true) : setCartLoading(true);
    await api.post("/auth/save_cart_data", { user_id: user.id, job_id: id });
    const { cart_jobs } = await api.post("/auth/get_cart_data", {
      user_id: user.id,
    });

    if (isData) {
      dispatch(setCart(cart_jobs, false));
      history.push("/payment");
    } else {
      dispatch(setCart(cart_jobs, true));
    }
    setLoading(false);
    setCartLoading(false);
  };

  const renderQuickLogin = () => {
    if (quickLogin) {
      if (user) {
        setQuickLogin(false);
        return setExam(value);
      }
      return (
        <QuickLoginComponent
          jobId={id}
          onChange={(v) => {
            setQuickLogin(false);
            if (v.name) setExam(value);
          }}
        />
      );
    }
  };

  return (
    <div className="card-wrapper">
      {exam && (
        <Exam
          value={{ ...exam, test_name: "Free test" }}
          onChange={() => setExam(null)}
        />
      )}
      {login && <LoginComponent onChange={() => setLogin(false)} />}
      {bank && <Bank onChange={() => setBank(false)} job={value} />}
      {renderQuickLogin()}
      <h4>{title}</h4>
      <div className="price">({price} RS)</div>
      <p className="time">
        AVAILABLE TILL{" "}
        <span>
          {new Date(valid_till).toLocaleString("default", {
            day: "numeric",
            year: "numeric",
            month: "long",
          })}
        </span>
      </p>
      <p className="available">
        AVAILABLE IN <span>{available_in}</span>
      </p>
      <p className="total">
        Total Tests: <span>Extensive Practice, Mock Tests & Past Papers</span>
      </p>
      <div className="buttons">
        <Deatils job={value}>
          <button>View Details</button>
        </Deatils>
        <div className="pay-btn">
          {/* <Link to="payment" className="button">
            Buy
          </Link> */}
          <button
            disabled={loading}
            onClick={() => addToCart("buy")}
            // onClick={buy}
          >
            {loading ? <Spinner size="sm" /> : "Buy"}
          </button>
          <button disabled={cartLoading} onClick={addToCart}>
            {cartLoading ? <Spinner size="sm" /> : "Add to cart"}
          </button>
        </div>
        {free === 1 && (
          <button disabled={loading} onClick={() => setQuickLogin(true)}>
            Take Free Test
          </button>
        )}
      </div>
    </div>
  );
};

const Deatils = ({ job, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Modal
        isOpen={open}
        toggle={() => setOpen(false)}
        className="job-details"
      >
        <ModalHeader toggle={() => setOpen(false)}>{job.title}</ModalHeader>
        <ModalBody>{job.detail || "No details for this job :("}</ModalBody>
      </Modal>
    </React.Fragment>
  );
};

const LoginComponent = ({ onChange }) => {
  return (
    <Modal isOpen={true} toggle={onChange}>
      <ModalBody style={{ padding: 0 }}>
        <Auth type="login" onChange={onChange} />
      </ModalBody>
    </Modal>
  );
};

const QuickLoginComponent = ({ jobId, onChange }) => {
  return (
    <Modal isOpen={true} toggle={onChange}>
      <ModalBody style={{ padding: 0 }}>
        <QuickLogin
          title="Please enter phone to get discounts"
          value={{ job_id: jobId }}
          onChange={onChange}
        />
      </ModalBody>
    </Modal>
  );
};

const Bank = ({ onChange, job }) => {
  const history = useHistory();
  const user = useSelector((state) => state.Auth.user);

  return (
    <React.Fragment>
      <Modal isOpen={true} toggle={onChange} className="job-bank">
        <ModalHeader toggle={onChange}>Payment details</ModalHeader>
        <ModalBody>
          <p>
            Please pay <strong>{job.price}/- Rs</strong> to following bank
            details
          </p>
          <table>
            <tbody>
              <tr>
                <th>Bank Name:</th>
                <td>MEEZAN BANK</td>
              </tr>
              <tr>
                <th>Account Title:</th>
                <td>GREEN MARK TRADING</td>
              </tr>
              <tr>
                <th>Account Number:</th>
                <td>02310104753218</td>
              </tr>
              <tr>
                <th>IBAN Number:</th>
                <td>PK62 MEZN 0002 3101 0475 3218</td>
              </tr>
            </tbody>
          </table>
          <div className="tid-form">
            <p>If already paid, please submit TID in the form below</p>
            <Formik
              initialValues={{
                transaction_id: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  values.job_id = job.id;
                  values.user_id = user.id;
                  await api.post("/auth/purchase_specific_job", values);
                  toastr.success("TID successfully submitted");
                  history.push("/dashboard/purchased_jobs");
                  onChange();
                } catch (e) {
                  console.log(e);
                }
                setSubmitting(false);
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
                    <Label>Transation ID</Label>
                    <Field
                      className="form-control"
                      name="transaction_id"
                      value={values.transaction_id}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <button
                    className="button"
                    disabled={isSubmitting || !values.transaction_id}
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
