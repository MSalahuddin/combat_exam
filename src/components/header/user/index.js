import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { setUser } from "../../../redux/auth/actions";
import api from "../../../services/api";

import UserImg from "../../../assets/user.png";

import "./index.scss";
import { toastr } from "react-redux-toastr";

export default () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  async function logout() {
    const { message } = await api.get(`/auth/logout`);
    toastr.success(message);
    dispatch(setUser(null));
  }

  return (
    <div className="user">
      <img className="avatar" onClick={() => setOpen(!open)} src={UserImg} />
      <div className={classnames({ open: open && "open" }, "menu")}>
        <div className="close" onClick={() => setOpen(false)}>
          &times;
        </div>
        {/* {user.status !== 0 && ( */}
        <div className="item" onClick={() => setOpen(false)}>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        {/* )} */}
        <div className="item" onClick={logout}>
          <Link to="#" style={{ color: "#d5373e" }}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
