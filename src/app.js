import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
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
  if (loading) return <div>Loading...</div>;

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
