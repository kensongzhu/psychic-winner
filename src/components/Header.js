import React from "react";
import calbos125 from "../calobs125.png";
import calobs150 from "../calobs150.png";
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
        <picture>
          <source srcSet={calobs150} media={"(min-width: 576px)"} />
          <img src={calbos125} alt={"app"} className={"img-fluid px-1 py-3"} />
        </picture>
      </a>
    </nav>

    <div
      className={
        "d-none d-md-flex align-items-center align-self-start py-4 f-semi-bold"
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
