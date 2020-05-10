import LoginForm from "./LoginForm";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MainView = () => {
  const location = useLocation();

  return (
    <div className={"col-12 col-lg-6 row no-gutters"}>
      <div className={"col-12 col-lg-10 col-xl-8"}>
        <TransitionGroup>
          <CSSTransition
            classNames="moveFromRightFade"
            timeout={700}
            appear={true}
            exit={false}
            key={location.key}
            unmountOnExit={true}
          >
            <Switch location={location}>
              <Route exact path={"/"} component={LoginForm} />
              <Route path={"/join-now"} component={SignUpForm} />
              <Route path={"/forgot-password"} component={ForgotPassword} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default MainView;
