import React from "react";

import Hero from "./hero";
import Courses from "./courses";
import Whyus from "./whyus";
import How from "./how";
import Features from "./features";

import "./index.scss";

export default () => {
  return (
    <main className="home-normal">
      <Hero />
      <Courses />
      <Whyus />
      <How />
      <Features />
    </main>
  );
};
