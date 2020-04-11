import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <>
      {/*<h2 className={"text-center form-title mb-4"}>Recovery</h2>*/}
      <form
        method={"post"}
        className={"calobs-form form-sm"}
        onSubmit={handleSubmit}
      >
        <fieldset className="form-group">
          <label className={"form-label"} htmlFor="username-or-email">
            Username / Email:
          </label>
          <input
            id="username-or-email"
            type="text"
            className="form-control"
            name="username-or-email"
            placeholder="Username or Email"
            required
          />
          <span className={"form-focus"} data-fa-icon="&#xf2b6;" />
        </fieldset>

        <div className={"text-right my-3"}>
          <Link to={"/"}>To Login Page</Link>
        </div>

        <div className={"d-flex flex-wrap justify-content-end"}>
          <button
            id="btn-recover-pass"
            type="submit"
            className="btn btn-primary submit-btn mb-3"
          >
            Recover Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
