import React from "react";
import logo from "../brand.png";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPass";

const Main = () => (
  <main className={"row no-gutters flex-grow-1 py-5"}>
    <section className={"col d-flex flex-column align-items-center"}>
      <div className={"text-center py-3 my-3"}>
        <img src={logo} alt={"logo"} width={340} height={"auto"} />
      </div>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route path={"/sign-up"} component={SignUp} />
        <Route path={"/forgot-password"} component={ForgotPassword} />
      </Switch>
    </section>
  </main>
);

export default Main;
