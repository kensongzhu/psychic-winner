import React from "react";
import calbos from "../calobs.svg";
import eifer from "../eifer.svg";
import edf from "../edf.svg";
import { Link, Route, Switch } from "react-router-dom";

const PageNavigator = ({ description, to, where }) => (
  <>
    <span className={"mr-2"}>{description}</span>
    <Link to={to} className={"text-decoration-none"}>
      {where}
    </Link>
  </>
);

const Header = () => (
  <header
    className={"row no-gutters justify-content-between align-items-center"}
  >
    {/*Logo*/}
    <nav
      className={
        "col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center"
      }
    >
      <a href={"/"}>
        <img src={calbos} alt={"app"} className={"img-thumbnail border-0"} />
      </a>
      <a href={"https://www.eifer.kit.edu/"}>
        <img src={eifer} alt={"eifer"} className={"img-thumbnail border-0"} />
      </a>
      <a href={"https://www.myelectricnetwork.fr/"}>
        <img src={edf} alt={"edf"} className={"img-thumbnail border-0"} />
      </a>
    </nav>

    <div
      className={
        "d-none d-md-flex align-items-center align-self-start py-5 f-semi-bold"
      }
    >
      <Switch>
        <Route
          exact
          path={"/"}
          render={() => (
            <PageNavigator
              description={"Don't have an account?"}
              to={"join-now"}
              where={"Join Now"}
            />
          )}
        />
        <Route
          path={"/join-now"}
          render={() => (
            <PageNavigator
              description={"Already have an account?"}
              to={"/"}
              where={"Sign in"}
            />
          )}
        />

        <Route
          path={"/forgot-password"}
          render={() => (
            <PageNavigator description={"Back to"} to={"/"} where={"Sign in"} />
          )}
        />

        {/*<Route path={"/forgot-password"} component={BackToLogin} />*/}
      </Switch>
    </div>
  </header>
);

Header.displayName = "Header";

export default Header;
