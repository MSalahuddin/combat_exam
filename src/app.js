import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/auth/actions";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Exams from "./pages/exams";
import Dashboard from "./pages/dashboard";
import Books from "./pages/books";
import OrderForm from "./pages/books/orderForm";
import Packages from "./pages/packages";
import Contact from "./pages/contact";
import Payment from "./pages/payment";
import Contests from "./pages/contests";
import Room from "./pages/room";
import OrderConfirm from "./pages/order_confirm";
import OrderComplete from "./pages/order_complete";
import InstituteSign from "./components/auth/Institute/signUp";
import UserSign from './components/auth/signup/index'
import Emslogin from "./components/emsauth/login";
import InstituteLogin from './components/auth/login/index';
import Forgot from './components/auth/forgot/index';
// import Order from './pages/books/orderForm'
import api from "./services/api";

export default () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const u = await api.get("/auth/user");
        dispatch(setUser(u));
      } catch (e) {
        console.log(e);
        dispatch(setUser(null));
      }
      setLoading(false);
    })();
    window.oncontextmenu = () => false;
    //   // setTimeout(() => {
    // dispatch(setUser({ name: "Jani", email: "jani@yopmail.fr" }));
    //   // }, 2000);
  }, []);
  //
  if (loading) return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "160px"

      }}
    >
      <Spinner style={{ width: "4rem", height: "4rem" }} color="dark" />
    </div>
  );

  return (
    <Router>
      <Switch>
        <RestrictedRoute path="/dashboard" component={Dashboard} />
        <div className="app">
          <Header fixed={false} />
          <Route path="/books" component={Books} />
          <Route path="/order/form" component={OrderForm} />
          <Route path="/payment" component={Payment} />
          <Route path="/exams/:course_id" component={Exams} />
          <Route path="/exams" component={Exams} />
          <Route path="/room" component={Room} />
          <Route path="/contests" component={Contests} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/easypay/order_confirm" component={OrderConfirm} />
          <Route path="/User-SignUP" component={UserSign} />
          {/* <Route path="/student-login" component={Emslogin} /> */}
          <Route path="/student-login" component={InstituteLogin} />
          <Route path="/forgot" component={Forgot} />
          <Route exact path="/easypay/order_complete" component={OrderComplete} />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.Auth.user);
  return <Route {...rest} render={() => (user ? <Component {...rest} /> : <Redirect to="/packages" />)} />;
};
