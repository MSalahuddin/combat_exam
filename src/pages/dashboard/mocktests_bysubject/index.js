import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Jobs from "./jobs";
import Analytics from "./analytics";

// import "./index.scss";

export default () => {
  return (
    <Switch>
      <Route path="/dashboard/mocktestsbysubject/:jobId/list" component={List} />
      <Route path="/dashboard/mocktestsbysubject/:jobId/analytics" component={Analytics} />
      <Route path="/dashboard/mocktestsbysubject/" component={Jobs} />
    </Switch>
  );
};
