import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("jon.snow@got.org");
  const [password, setPassword] = useState("");

  const handleFocus = (evt) => {
    if (evt.target.name === "username") {
      setUsername("");
    } else {
      setPassword("");
    }
  };
  const handleChange = (evt) => {
    if (evt.target.name === "username") {
      setUsername(evt.target.value);
    } else {
      setPassword(evt.target.value);
    }
  };
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <>
      {/*<h3 className={"text-center form-title"}>Sign In</h3>*/}
      <form
        id="loginform"
        method="post"
        className={"calobs-form form-sm"}
        onSubmit={handleSubmit}
      >
        <fieldset className="form-group">
          <label className={"form-label"} htmlFor="login-username">
            Username
          </label>
          <input
            id="login-username"
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            onFocus={handleFocus}
            onChange={handleChange}
            value={username}
            required
          />
          <span className={"form-focus"} data-fa-icon="&#xf007;" />
        </fieldset>

        <fieldset className="form-group">
          <label className={"form-label"} htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onFocus={handleFocus}
            onChange={handleChange}
            value={password}
            required
          />
          <span className={"form-focus"} data-fa-icon="&#xf023;" />
        </fieldset>

        <div className={"text-right my-3"}>
          <Link to="/forgot-password">{"Forgot password"}</Link>
        </div>

        <button
          id="btn-login"
          type="submit"
          className="btn btn-primary btn-lg submit-btn w-100 my-1"
        >
          Sign in
        </button>

        <div className={"text-center my-3"}>
          <span className={"mr-1"}>Need an account?</span>
          <Link to="/sign-up">{"Sign up"}</Link>
        </div>
      </form>
    </>
  );
};

Login.displayName = "Login";

export default Login;
