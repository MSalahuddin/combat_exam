import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Jobs from "./jobs";
import Analytics from "./analytics";

// import "./index.scss";

export default () => {
  return (
    <Switch>
      <Route path="/dashboard/mocktests/:jobId/list" component={List} />
      <Route path="/dashboard/mocktests/:jobId/analytics" component={Analytics} />
      <Route path="/dashboard/mocktests/" component={Jobs} />
    </Switch>
  );
};
