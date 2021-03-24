import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { setCart } from "../../../redux/auth/actions";
import api from "../../../services/api";

import CartImg from "../../../assets/cart.svg";

import "./index.scss";
import { Link } from "react-router-dom";

export default () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, cart, showCart } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showCart) setOpen(true);
  }, [showCart]);

  useEffect(() => {
    (async () => {
      const { cart_jobs } = await api.post("/auth/get_cart_data", { user_id: user.id });
      dispatch(setCart(cart_jobs));
    })();
  }, []);

  const onRemove = async (job_id) => {
    setLoading(true);
    await api.post("/auth/delete_job_from_cart", { user_id: user.id, job_id });
    const { cart_jobs } = await api.post("/auth/get_cart_data", { user_id: user.id });
    dispatch(setCart(cart_jobs));
    setLoading(false);
  };

  function renderContent() {
    if (!cart.length) return <div className="cart-empty">Cart is empty !</div>;
    const total = cart.reduce((a, b) => parseInt(a) + parseInt(b.job.price), 0);
    return (
      <>
        <div>
          {cart.map(({ job }) => (
            <div className="cart-item">
              <div className="item-title">{job.title}</div>
              <div className="item-price">{job.price}/- RS</div>
              <div className="item-delete" onClick={() => onRemove(job.id)} />
            </div>
          ))}
        </div>
        <div className="cart-total">
          <div className="total-title">Total</div>
          <div className="total-price">{total}/- RS</div>
        </div>
        <Link to="/payment" className="cart-btn">
          Pay Now
        </Link>
      </>
    );
  }

  return (
    <div className={classnames({ open: open }, "cart")}>
      <img className="cart-icon" onClick={() => setOpen(true)} src={CartImg} />
      <div className="cart-box">
        <div
          className="cart-close"
          onClick={() => {
            setOpen(false);
            dispatch(setCart(cart, false));
          }}
        />
        <div className="cart-title">Your Cart</div>
        {renderContent()}
      </div>
    </div>
  );
};
