import React from "react";
import { useSelector } from "react-redux";

import Normal from "./normal";
import User from "./user";

export default () => {
  // const user = useSelector((state) => state.Auth.user);

  // return <div>{(user && <User />) || <Normal />}</div>;
  return <Normal />;
};
