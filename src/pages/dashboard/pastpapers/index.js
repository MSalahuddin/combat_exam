import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "./list";
import Jobs from "./jobs";

// import "./index.scss";

export default () => {
  return (
    <Switch>
      <Route path="/dashboard/pastpapers/:jobId/list" component={List} />
      <Route path="/dashboard/pastpapers/" component={Jobs} />
    </Switch>
  );
};
