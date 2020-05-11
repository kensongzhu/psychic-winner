import React from "react";
import calbos from "../calobs.svg";
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
        "col-12 col-md-6 d-flex justify-content-md-start align-items-center"
      }
    >
      <a href={"/"}>
        <img
          src={calbos}
          alt={"app"}
          className={"px-1 py-4"}
          width={175}
          height={"auto"}
        />
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
