import React from "react";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPass";
import SignUp from "./components/SignUp";
import logo from "./brand.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={"container-fluid d-flex flex-column wrapper p-0"}>
        <main className={"row no-gutters flex-grow-1"}>
          <section className={"sidebar d-none d-lg-block col-lg-4 p-0"}>
            <div className={"hero"} />
          </section>
          <section
            className={
              "main col col-lg-8 d-flex flex-column align-items-center"
            }
          >
            <div
              className={
                "p-3 flex-grow-1 d-flex flex-column justify-content-center"
              }
            >
              <div className={"text-center py-3 mb-3"}>
                <img src={logo} alt={"logo"} width={340} height={"auto"} />
              </div>
              <Switch>
                <Route exact path={"/"} component={Login} />
                <Route path={"/sign-up"} component={SignUp} />
                <Route path={"/forgot-password"} component={ForgotPassword} />
              </Switch>
            </div>
            <Footer />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
