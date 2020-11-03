import React from "react";
import { Route, Switch } from "react-router-dom";

import { MainPage } from "../pages/MainPage";

const Router = () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
  </Switch>
);

export { Router };
