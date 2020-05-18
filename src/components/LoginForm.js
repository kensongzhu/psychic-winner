import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledInput } from "../Elements/StyledInput";
import StyledButton from "../Elements/StyledButton";
import { RouteLink } from "../Elements/StyledLink";

const LoginForm = () => {
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
    <div className={"w-100"}>
      <form
        id="loginform"
        method="post"
        onSubmit={handleSubmit}
        className={"calobs-form"}
      >
        <h1 className={"form-title"}>Sign in</h1>

        <fieldset className="form-group mb-6">
          <label className={"form-label"} htmlFor="login-username">
            Username
          </label>
          <StyledInput
            id="login-username"
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter your username."
            onFocus={handleFocus}
            onChange={handleChange}
            value={username}
            required
          />
        </fieldset>

        <fieldset className="form-group mb-6">
          <div
            className={
              "d-flex justify-content-between align-items-start form-label"
            }
          >
            <label htmlFor="login-password">Password</label>
            <RouteLink
              to="/forgot-password"
              className={"text-decoration-none f-regular"}
            >
              {"Forgot password"}
            </RouteLink>
          </div>

          <StyledInput
            id="login-password"
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            onFocus={handleFocus}
            onChange={handleChange}
            value={password}
            required
          />
        </fieldset>

        <div className={"d-flex justify-content-center"}>
          <StyledButton
            id="btn-login"
            type="submit"
            className="btn btn-primary submit-btn my-1"
          >
            Sign in
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
