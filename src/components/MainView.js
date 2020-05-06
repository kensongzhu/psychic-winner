import LoginForm from "./LoginForm";
import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassForm";

const MainView = () => (
  <div className={"col-12 col-lg-6 row no-gutters"}>
    <div className={"col-12 col-lg-10 col-xl-8"}>
      <Switch>
        <Route exact path={"/"} component={LoginForm} />
        <Route path={"/join-now"} component={SignUpForm} />
        <Route path={"/forgot-password"} component={ForgotPassword} />
      </Switch>
    </div>
  </div>
);

export default MainView;
