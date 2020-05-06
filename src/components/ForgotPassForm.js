import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <>
      <h1 className={"f-bold mb-6"}>Access recovery</h1>
      <form method={"post"} onSubmit={handleSubmit} className={"calobs-form"}>
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
        </fieldset>

        <div className={"d-flex flex-wrap justify-content-center mt-6"}>
          <button
            id="btn-recover-pass"
            type="submit"
            className="btn btn-primary submit-btn mb-3"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
