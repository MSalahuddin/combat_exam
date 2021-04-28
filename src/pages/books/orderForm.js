import React, { useState } from "react";
import { Col, FormGroup, Row, Container } from "reactstrap";
import "react-image-gallery/styles/scss/image-gallery.scss";
import api from "../../services/api";
import { Field, Formik } from "formik";
import { toastr } from "react-redux-toastr";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [checkOutData, setCheckOutData] = useState("");
  const user = useSelector((state) => state.Auth.user);
  const bookData = props.location?.state?.bookData;
  const dispatch = useDispatch();

  // useEffect(async () => {
  //   setLoading(true);
  //   try {
  //     // ${total}
  //     const res = await api.get(
  //       `/auth/get_easy_paisa?url=${window.location.origin}/easypay/order_confirm&amount=${bookData.price}.01`
  //     );
  //     if (res.data) {
  //       setLoading(false);
  //       setCheckOutData(res.data);
  //       dispatch(setBooksCart([bookData]));
  //     }
  //   } catch (e) {
  //     setLoading(false);
  //     if (e.message) toastr.error(e.message);
  //   }
  // }, []);

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
                  Swal.fire({
                    icon: "success",
                    title: "Successfully Ordered",
                    text:
                      "You have place successfully the Order for the Books. Our Official Representative will call you for further information. Thank you!",
                    confirmButtonColor: "#2bb24a",
                  });
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
                  {/* <div>
                    <form
                      action="https://easypay.easypaisa.com.pk/easypay/Index.jsf"
                      method="POST"
                    >
                      <input hidden value={checkOutData.amount} type="text" name="amount" />
                      <input hidden value={checkOutData.storeId} type="text" name="storeId" />
                      <input
                        hidden
                        value={checkOutData.postBackURL}
                        type="text"
                        name="postBackURL"
                      />
                      <input
                        hidden
                        value={checkOutData.orderRefNum}
                        type="text"
                        name="orderRefNum"
                      />
                      <input hidden value={checkOutData.expiryDate} type="text" name="expiryDate" />
                      <input
                        hidden
                        value={checkOutData.autoRedirect}
                        type="text"
                        name="autoRedirect"
                      />
                      <input
                        hidden
                        value={checkOutData.merchantHashedReq}
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
                      <button className="button">Pay Now {bookData.price}</button>
                    </form>
                  </div> */}
                  <div className="button-div bg-white">
                    <button className="button">Pay Now {bookData.price}</button>
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
