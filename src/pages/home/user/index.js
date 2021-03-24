import React from "react";

import Hero from "./hero";
import Details from "./details";

import "./index.scss";

export default () => {
  return (
    <div className="home-user">
      <Hero />
      <Details />
    </div>
  );
};
