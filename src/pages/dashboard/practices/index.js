import React from "react";
import { Route, Switch } from "react-router-dom";

import PurchasedJobs from "./purchasedjobs";
import Courses from "./courses";
import Sections from "./sections";
import Practices from "./practices";

// import "./index.scss";

export default () => {
  return (
    <Switch>
      <Route path="/dashboard/practices/:sectionId/list" component={Practices} />
      <Route path="/dashboard/practices/:courseId/sections" component={Sections} />
      <Route path="/dashboard/practices/:jobId/courses" component={Courses} />
      <Route path="/dashboard/practices" component={PurchasedJobs} />
    </Switch>
  );
};
