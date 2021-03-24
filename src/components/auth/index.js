import React, { useState } from "react";

import Login from "./login";
import Forgot from "./forgot";
import Singup from "./signup";

export default ({ type = "login", onChange }) => {
  const [screen, setScreen] = useState(type);

  const obj = {
    forgot: <Forgot setScreen={setScreen} onChange={onChange} />,
    login: <Login setScreen={setScreen} onChange={onChange} />,
    signup: <Singup setScreen={setScreen} onChange={onChange} />,
  };

  return obj[screen];
};
