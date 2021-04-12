import React, { useEffect, useState } from "react";
import QueryString from "query-string";
import { toastr } from "react-redux-toastr";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import "./index.scss";
import ThumbUp from '../../assets/thumbUp.jpeg'
import Tick from '../../assets/tick.jpeg'
import errroImg from "../../assets/error.jpg";
export default (props) => {
    const { cart, user } = useSelector((state) => state.Auth);
    const [loading, setLoading] = useState(true);
    let params = QueryString.parse(props.location.search)
    let [transactionFailed, setTransactionFailed] = useState(false);

    useEffect(() => {
        if (params?.message == "Transaction failed due to some degradation or planned activity at core end. Customer may try again"
            || params?.message == "Merchant's credit limit (daily or monthly or yearly) exhausted") {
            setTransactionFailed(true);
        } else {
            console.log("false")
            setTransactionFailed(false)
        }
    }, [])
    useEffect(async () => {
        // message
        //Merchant's credit limit (daily or monthly or yearly) exhausted
        //"Transaction failed due to some degradation or planned activity at core end. Customer may try again"

        if (
            !cart.length
            && (params?.message != "Transaction failed due to some degradation or planned activity at core end. Customer may try again"
                && params?.message != "Merchant's credit limit (daily or monthly or yearly) exhausted")
        ) {
            console.log("order conpkete")
            let job_ids = [];
            cart.map((val) => job_ids.push(val.job_id));
            let jobId = job_ids.join(',');
            let body = {
                easy_paisa: JSON.stringify(params),
                user_id: cart[0]?.user_id,
                job_id: jobId
            }
            try {
                const res = await api.post(`/complete_order_payment`, body,);
                console.log("🚀 ~  res", res.data)
                if (res.data) {
                    setLoading(false);
                }
            } catch (e) {
                console.log("🚀 ~ file: index.js ~ line 27 ~ useEffect ~ e", e)
                setLoading(false);
                if (e.message) toastr.error(e.message);
            }
        }
    }, [cart]);

    const Error = () => {
        return (
            <div className="row-list" style={{ textAlign: "center" }}>
                <img src={errroImg} style={{ height: 50, width: 50, marginBottom: 10 }} />
                <div>We couldn't complete your payment</div>
                <br />
                <div>
                    Sorry, we detected some problem with the payment system and unable to
                    complete your payment. Please try again later.
            </div>
                <p className="payment-agree">
                    By purchasing, you agree to our Terms & Privacy
            </p>
            </div>
        );
    };
    console.log(transactionFailed)
    return (
        <div>
            { transactionFailed ? Error() : <div className="order_complete">
                <div className="hero">
                    <img src={ThumbUp} style={{ height: "6%", width: '9%' }} />
                    <p style={{ color: '#2bb24a', fontWeight: 'bold', fontSize: 22 }}>Congratulation !</p>

                    <div style={{ fontWeight: 'bold', fontSize: 18 }}>
                        <img src={Tick} style={{ height: 25, width: 25, marginRight: 10 }} />
                    Your Payment has been successful
                </div>
                Your order # {params?.orderRefNumber} has been processed. <br /> Thankyou!
            </div>
            </div>
            }
        </div >
    );
};