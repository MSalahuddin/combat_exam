import React, { useEffect, useState } from "react";
import {
  Col,
  FormGroup,
  Label,
  Row,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Field, Formik } from "formik";
import { toastr } from "react-redux-toastr";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CreditImg from "../../assets/card-item.svg";
import BankImg from "../../assets/bank.svg";
import WalletImg from "../../assets/wallet.svg";
import JazzImg from "../../assets/jazz-cash-logo.png";
import errroImg from "../../assets/error.jpg";
import EasytImg from "../../assets/ebuy-easypaisa-logo.png";

import MezaanImg from "../../assets/mezaan-logo.png";
import AlhabibImg from "../../assets/bankalhabiblogo.png";
import HblImg from "../../assets/hbl-logo.png";
import StdtImg from "../../assets/std-bank-logo.png";
import JsImg from "../../assets/js-bank-logo.png";
import AlfalahImg from "../../assets/alfalah-logo.png";
import easyPaisaImg from "../../assets/easy_paisa.jpeg";
import { setCart } from "../../redux/auth/actions";
import api from "../../services/api";

import "./index.scss";

export default () => {
  const [screen, setScreen] = useState("list");
  const { cart, user } = useSelector((state) => state.Auth);
  const [loading, setLoading] = useState(true);
  const [checkOutData, setCheckOutData] = useState("");
  const total = cart.reduce((a, b) => parseInt(a) + parseInt(b.job.price), 0);

  useEffect(async () => {
    setLoading(true);
    try {
      // ${total}
      const res = await api.get(
        `/auth/get_easy_paisa?url=${window.location.origin}/easypay/order_confirm&amount=6.01`
      );
      console.log("🚀 ~  res", res);
      if (res.data) {
        setLoading(false);
        setCheckOutData(res.data);
      }
    } catch (e) {
      setLoading(false);
      if (e.message) toastr.error(e.message);
    }
  }, []);

  const checkOutPayment = async () => {
    // setLoading(true);
    // try {
    //   const res = await api.get(`/auth/get_easy_paisa?url=${window.location.origin}/easypay/order_confirm&amount=20.05`);
    //   if (res.data) {
    //     setLoading(false);
    //     setCheckOutData(res.data);
    //   }
    // } catch (e) {
    //   setLoading(false);
    //   if (e.message) toastr.error(e.message);
    // }
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const onPayment = async () => {
    for (let i = 0; i < cart.length; i++) {
      await api.post("/auth/delete_job_from_cart", {
        user_id: user.id,
        job_id: cart[i].job.id,
      });
    }
    dispatch(setCart([]));
    toastr.success("successfull Payment !");
    history.push("/packages");
  };

  const handleChange = (v) => {
    setScreen(v);
  };

  const screens = {
    list: <MethodList amount={total} onChange={handleChange} jobId={cart[0]?.job?.id} />,
    wallet: (
      <Wallet
        amount={total}
        onChange={handleChange}
        getApi={checkOutPayment}
        res={checkOutData}
        loading={loading}
      />
    ),
    netbanking: <NetBanking amount={total} onChange={handleChange} />,
    card: <Card amount={total} onChange={handleChange} />,
    payNow: <PayNow amount={total} onChange={handleChange} />,
    verification: <Verification amount={total} onChange={handleChange} />,
    error: <Error amount={total} onChange={handleChange} />,
  };
  return (
    <div className="payment">
      <div className="payment-content">
        <div className="payment-top">
          <p>
            Paying to<div>Combat Exam</div>
          </p>
        </div>
        <div className="payment-header">
          <p>Purpose of Payment</p>
          <div>Combat Exam Test Preparation Payment</div>
        </div>
        <div className="payment-header">
          <p>Amount</p>
          <div>Rs. {total}</div>
        </div>
        <div className="payment-body">{screens[screen]}</div>
        <div className="payment-trust" />
      </div>
    </div>
  );
};

const MethodList = ({ amount, onChange, jobId }) => {
  const [bank, setBank] = useState(false);
  return (
    <div className="list">
      <div className="title-bar">
        <p>Select a Payment Method</p>
      </div>
      <div
        className="item"
        style={{ backgroundImage: `url(${CreditImg})` }}
        onClick={() => onChange("card")}
      >
        Credit / Debit Cards
      </div>
      <div
        className="item"
        style={{ backgroundImage: `url(${BankImg})` }}
        onClick={() => setBank(true)}
      >
        Net Banking
      </div>
      <div
        className="item"
        style={{ backgroundImage: `url(${WalletImg})` }}
        onClick={() => onChange("wallet")}
      >
        Easy Paisa Wallet
        <img
          src={easyPaisaImg}
          style={{ height: "30%", width: "30%", marginLeft: "40%" }}
        />
      </div>
      {bank && <Bank onChange={() => setBank(false)} job={{ price: amount, jobId: jobId }} />}
    </div>
  );
};

const Wallet = ({ amount, onChange, getApi, res, loading }) => {
  return (
    <div className="row-list">
      <div className="title-bar">
        <p>Wallets</p>
        <span onClick={() => onChange("list")}>Change</span>
      </div>
      <Row>
        {/* <Col>
          <div className="item" style={{ backgroundImage: `url(${JazzImg})` }} />
        </Col> */}
        <Col>
          <div
            className="item"
            style={{ backgroundImage: `url(${EasytImg})` }}
          />
        </Col>
      </Row>
      <div>
        <form
          action="https://easypay.easypaisa.com.pk/easypay/Index.jsf"
          method="POST"
        >
          <input hidden value={res.amount} type="text" name="amount" />
          <input hidden value={res.storeId} type="text" name="storeId" />
          <input
            hidden
            value={res.postBackURL}
            type="text"
            name="postBackURL"
          />
          <input
            hidden
            value={res.orderRefNum}
            type="text"
            name="orderRefNum"
          />
          <input hidden value={res.expiryDate} type="text" name="expiryDate" />
          <input
            hidden
            value={res.autoRedirect}
            type="text"
            name="autoRedirect"
          />
          <input
            hidden
            value={res.merchantHashedReq}
            type="text"
            name="merchantHashedReq"
          />
          <input hidden value={""} type="text" name="paymentMethod" />
          <button className="button" type="submit">
            {loading ? (
              <Spinner size="sm" />
            ) : (
              <span>Checkout Rs. {amount}</span>
            )}
          </button>
        </form>
      </div>

      <p className="payment-agree">
        By purchasing, you agree to our Terms & Privacy
      </p>

      {/* <div>
 
        <form action="https://easypay.easypaisa.com.pk/easypay/Index.jsf" method="POST">
          <input hidden value={"20.01"} name="amount" />
          <input hidden value={"77477"} name="storeId" />
          <input hidden value={`${window.location.origin}/easypay/order_confirm`} name="postBackURL" />
          <input hidden value={"20210320140247"} name="orderRefNum" />
          <input hidden value={"20210320 150247"} name="expiryDate" />
          <input hidden value={"1"} name="autoRedirect" />
          <input hidden value={"KQLlTrZ0UF9Z+I6cqRoIOjx1USgmM38gDHkr5JcQuE//+/wfNcses2TIjDvQMJ6F7BkGWAWrHSLYYHcIelBVQRRnN5q85PkBN5c/J4luPDONCLyH8xZC6Tcc1OFWOVOczjgoNkQlJ3StrvMv11RA+xs9B5FcyZhSr0RCxc6Bl5HEEL6J5srIWHjM5In23BHH7NRKjVSDzJDfcsL2SLxUFg=="} name="merchantHashedReq" />
          <input hidden value={""} name="paymentMethod" />
          <button type="submit">
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
};

const PayNow = ({ amount, onChange }) => {
  return (
    <div className="row-list">
      <div>
        <div style={{ fontSize: 13 }}>
          Experience easy payments - save your Easypaisa account as default
          method to pay!
        </div>
        <div style={{ fontSize: 13 }}>
          Please ensure your Easypaisa account is Active and has sufficient
          balance.
        </div>
        <br />
        <div style={{ fontSize: 13 }}>
          To confirm your payment after providing OPT:
        </div>
        <br />
        <div style={{ fontSize: 13 }}>
          -USSD prompt for Telenor Customers Only
        </div>
        <ul style={{ listStyleType: "disc", paddingLeft: 15 }}>
          <li style={{ fontSize: 13 }}>
            Unlock your phone and enter 5 digit PIN in the prompt to pay
          </li>
        </ul>
        <br />
        <div style={{ fontSize: 13 }}>OR</div>
        <br />
        <div style={{ fontSize: 13 }}>
          - Approve Payment in your Easypaisa App (Telenor and Other Networks)
        </div>
        <ul style={{ listStyleType: "disc", paddingLeft: 15 }}>
          <li style={{ fontSize: 13 }}>
            Login to Easypaisa App and tap on payment notification to approve
          </li>
          <li style={{ fontSize: 13 }}>
            If you miss the notification, go to My Approvals in side menu to
            confirm
          </li>
        </ul>
        <br />
        <Formik
          initialValues={{
            phone: "",
          }}
          validateOnMount={true}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values, "SSSSSSSSSSSSSSSSSSS");
            // await api.post("/auth/save_phone", { ...values, ...value });
            // // const { access_token, user } = await api.post("/auth/login", { email: "ali@gmail.com", password: "12345678" });
            // // api.setToken(access_token);
            // toastr.success("successfully saved!");
            // dispatch(setUser(values));
            // // history.push("/");
            // onChange(values);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            errors,
            values,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <p>Easypaisa Account Number</p>
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
            </form>
          )}
        </Formik>
      </div>
      <button className="button" onClick={() => onChange("verification")}>
        Pay Now {amount}
      </button>
      <p className="payment-agree">
        By purchasing, you agree to our Terms & Privacy
      </p>
    </div>
  );
};

const Verification = ({ amount, onChange }) => {
  return (
    <div className="row-list">
      <div>
        <div style={{ fontSize: 18, fontWeight: "bold" }}>SMS Verification</div>
        <div className="title-bar">
          <p>Please enter the OPT received via SMS</p>
        </div>
        <div style={{ fontSize: 15, fontWeight: "bold", marginTop: 10 }}>
          +9222200222
        </div>
        <br />

        <Formik
          initialValues={{
            code: "",
          }}
          validateOnMount={true}
        // onSubmit={async (values, { setSubmitting }) => {
        //   console.log(values);
        //   await api.post("/auth/save_phone", { ...values, ...value });
        //   // const { access_token, user } = await api.post("/auth/login", { email: "ali@gmail.com", password: "12345678" });
        //   // api.setToken(access_token);
        //   toastr.success("successfully saved!");
        //   dispatch(setUser(values));
        //   // history.push("/");
        //   onChange(values);
        // }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            errors,
            values,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <p>Enter SMS Code</p>
                <Field
                  validate={(v) => !v.length || v.length !== 11}
                  maxlength="11"
                  placeholder="Enter Authentication Code"
                  className="form-control"
                  name="code"
                  value={values.code}
                  onChange={handleChange}
                />
              </FormGroup>
            </form>
          )}
        </Formik>
      </div>
      <button className="button" onClick={() => onChange("error")}>
        Pay Now {amount}
      </button>
      <p className="payment-agree">
        By purchasing, you agree to our Terms & Privacy
      </p>
    </div>
  );
};

const Error = ({ amount, onChange }) => {
  return (
    <div className="row-list" style={{ textAlign: "center" }}>
      <img src={errroImg} style={{ height: 50, width: 50, marginBottom: 10 }} />
      <div>We couldn't complete your payment</div>
      <br />
      <div>
        Sorry, we detected some problem with the payment system and unable to
        complete your payment. Please try again later.
      </div>
      <button className="button" onClick={() => onChange("error")}>
        CHECK MY ORDER
      </button>
      <p className="payment-agree">
        By purchasing, you agree to our Terms & Privacy
      </p>
    </div>
  );
};

const NetBanking = ({ amount, onChange }) => {
  return (
    <div className="row-list">
      <div className="title-bar">
        <p>Net Banking</p>
        <span onClick={() => onChange("list")}>Change</span>
      </div>
      <Row>
        <Col xs={6}>
          <div
            className="item"
            style={{ backgroundImage: `url(${MezaanImg})` }}
          />
        </Col>
        <Col xs={6}>
          <div
            className="item"
            style={{ backgroundImage: `url(${AlhabibImg})` }}
          />
        </Col>
        <Col xs={6}>
          <div className="item" style={{ backgroundImage: `url(${HblImg})` }} />
        </Col>
        <Col xs={6}>
          <div
            className="item"
            style={{ backgroundImage: `url(${StdtImg})` }}
          />
        </Col>
        <Col xs={6}>
          <div className="item" style={{ backgroundImage: `url(${JsImg})` }} />
        </Col>
        <Col xs={6}>
          <div
            className="item"
            style={{ backgroundImage: `url(${AlfalahImg})` }}
          />
        </Col>
      </Row>
      <button className="button">Checkout Rs. {amount}</button>
      <p className="payment-agree">
        By purchasing, you agree to our Terms & Privacy
      </p>
    </div>
  );
};

const Card = ({ amount, onChange }) => {
  return (
    <div>
      <div className="title-bar">
        <p>Credit / Debit Cards</p>
        <span onClick={() => onChange("list")}>Change</span>
      </div>

      <Formik
        initialValues={{
          card_number: "",
          month: "",
          year: "",
          cvv: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // values.job_id = job.id;
            // values.user_id = job.user_id;
            // await api.post("/auth/purchase_specific_job", values);
            // toastr.success("successfully submitted");
            // history.push("/dashboard/purchased_jobs");
            onChange();
          } catch (e) {
            console.log(e);
          }
          setSubmitting(false);
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Card Number</Label>
              <Field
                className="form-control"
                placeholder="Card Number"
                name="card_number"
                value={values.card_number}
                onChange={handleChange}
              />
            </FormGroup>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label>Expiry</Label>
                  <div style={{ display: "flex" }}>
                    <Field
                      className="form-control"
                      placeholder="MM"
                      name="month"
                      value={values.month}
                      onChange={handleChange}
                      style={{ width: 60 }}
                    />
                    <span style={{ margin: "0 10px" }}>/</span>
                    <Field
                      className="form-control"
                      placeholder="YY"
                      name="year"
                      value={values.year}
                      onChange={handleChange}
                      style={{ width: 60 }}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>CVV</Label>
                  <Field
                    className="form-control"
                    placeholder="CVV"
                    name="cvv"
                    value={values.cvv}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <button className="button" disabled={isSubmitting}>
              Pay Rs. {amount}
            </button>
            <p className="payment-agree">
              By purchasing, you agree to our Terms & Privacy
            </p>
          </form>
        )}
      </Formik>
    </div>
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

                  values.job_id = job.jobId//job.id;
                  values.user_id = user.id;
                  let result = await api.post("/auth/purchase_specific_job", values);
                  console.log("🚀 ~ file: index.js ~ line 617 ~ onSubmit={ ~ result", result)
                  toastr.success("TID successfully submitted");
                  history.push("/dashboard/purchased_jobs");
                  onChange();
                } catch (e) {
                  console.log("🚀 ~ file: index.js ~ line 621 ~ onSubmit={ ~ e", e)
                  if (e.message) toastr.error(e.message);
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
