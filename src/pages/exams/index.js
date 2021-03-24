import React from "react";

import Hero from "./hero";
import Details from "./details";

import "./index.scss";

export default function Index() {
  return (
    <div className="exams-page">
      <Hero />
      <Details />
    </div>
  );
}
