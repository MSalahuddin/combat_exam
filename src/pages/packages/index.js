import React from "react";

import Hero from "./hero";
import Details from "./details";
import Takefreetest from "./takefreetest";

import "./index.scss";

export default () => {
  return (
    <div className="packages">
      <Takefreetest />
      <Hero />
      <Details />
    </div>
  );
};
