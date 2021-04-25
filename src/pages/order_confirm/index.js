import React, { useEffect } from "react";
import QueryString from "query-string";
import { useSelector } from "react-redux";
import Tick from '../../assets/tick.jpeg'

import "./index.scss";

export default (props) => {
    let params = QueryString.parse(props.location.search);
    console.log("🚀 ~ file: index.js ~ line 10 ~ params", params)
    const { cart, } = useSelector((state) => state.Auth);
    useSelector((state) => console.log(state, '//////////////////'));
    const total = cart.reduce((a, b) => parseInt(a) + parseInt(b.job.price), 0);
    return (
        <div className="order_confirm">
            <div className="hero">
                <form action="https://easypay.easypaisa.com.pk/easypay/Confirm.jsf" method="POST">
                    <input hidden value={`${window.location.origin}/easypay/order_complete`} type="text" name="postBackURL" />
                    <input hidden value={params.auth_token} type="text" name="auth_token" />
                    <div>
                        <img src={Tick} style={{ height: "6%", width: '9%' }} />
                        <p>Please confirm to pay the Amount {total ? total : 0} Rupee</p>
                        to Green Mark Trading (Combat Exam) to complete the order. <br /> Thankyou! <br />
                        <div style={{ width: '100%', alignItems: "center", justifyContent: "center" }}>
                            <button className="button" type="submit" style={{ width: '100%', }}>
                                PLEASE CONFIRM
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};