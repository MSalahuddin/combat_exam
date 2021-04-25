import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal, ModalBody, ButtonDropdown,
  DropdownToggle,
} from "reactstrap";
import { useSelector } from "react-redux";
import classnames from "classnames";

import Auth from "../auth/";
import User from "./user";
import Cart from "./cart";

import LOGO from "../../assets/logo.png";

import "./index.scss";

export default ({ fixed = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const user = useSelector((state) => state.Auth.user)?.email;

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY >= 70));
    window.addEventListener("click", () => setMobileMenu(false));
  }, [scrolled]);

  return (
    <div className={classnames({ scrolled: scrolled && "scrolled", fixed: fixed && "fixed" }, "header")}>
      <div className="inner-header">
        <Link className="logo" to="/">
          <img src={LOGO} />
        </Link>
        <ul className={classnames({ open: mobileMenu && "open" }, "nav")} onClick={() => setMobileMenu(false)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/packages">Exams packages</Link>
          </li>
          <li>
            <Link to="/room">Lectures Room</Link>
          </li>
          {/* <li>
            <Link to="/contests">Contests</Link>
          </li> */}
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
        <ul className="header-auth">
          {!user && (
            <>
              <LoginComponent />
              <SignupComponent />
            </>
          )}
          {user && (
            <>
              <Cart />
              <User />
            </>
          )}
        </ul>
        <div
          className="menu-btn"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenu(!mobileMenu);
          }}
        />
      </div>
    </div>
  );
};

const SignupComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    // <React.Fragment>
    //   <li className="signup-button" onClick={() => setOpen(true)}>
    //     Sign up
    //   </li>
    //   <Modal isOpen={open} toggle={() => setOpen(false)}>
    //     <ModalBody style={{ padding: 0 }}>
    //       <Auth type="signup" onChange={() => setOpen(false)} />
    //     </ModalBody>
    //   </Modal>
    // </React.Fragment>
    <ButtonDropdown >
      <Link to="/User-SignUP">
        <DropdownToggle>Sign Up</DropdownToggle>
      </Link>
    </ButtonDropdown>
  );
};

const LoginComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    // <React.Fragment>
    //   <li onClick={() => setOpen(true)}>Login</li>
    //   <Modal isOpen={open} toggle={() => setOpen(false)}>
    //     <ModalBody style={{ padding: 0 }}>
    //       <Auth type="login" onChange={() => setOpen(false)} />
    //     </ModalBody>
    //   </Modal>
    // </React.Fragment>
    <ButtonDropdown style={{ marginRight: "8px" }}>
      <Link to="/student-login">
        <DropdownToggle >Login</DropdownToggle>
      </Link>
    </ButtonDropdown>
  );
};
