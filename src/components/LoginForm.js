import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <h1 className={"f-bold mb-4 mb-md-6"}>Sign in</h1>
      <form
        id="loginform"
        method="post"
        onSubmit={handleSubmit}
        className={"calobs-form"}
      >
        <fieldset className="form-group mb-6">
          <label className={"form-label"} htmlFor="login-username">
            Username
          </label>
          <input
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
            <Link
              to="/forgot-password"
              className={"text-decoration-none f-regular"}
            >
              {"Forgot password"}
            </Link>
          </div>

          <input
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
          <button
            id="btn-login"
            type="submit"
            className="btn btn-primary submit-btn my-1"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
