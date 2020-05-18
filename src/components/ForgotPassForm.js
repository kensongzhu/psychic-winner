import React from "react";
import StyledButton from "../Elements/StyledButton";
import { StyledInput } from "../Elements/StyledInput";

const ForgotPassword = () => {
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <div className={"w-100"}>
      <form method={"post"} onSubmit={handleSubmit} className={"calobs-form"}>
        <h1 className={"form-title"}>Access recovery</h1>

        <fieldset className="form-group">
          <label className={"form-label"} htmlFor="username-or-email">
            Username / Email:
          </label>
          <StyledInput
            id="username-or-email"
            type="text"
            className="form-control"
            name="username-or-email"
            placeholder="Username or Email"
            required
          />
        </fieldset>

        <div className={"d-flex flex-wrap justify-content-center mt-6"}>
          <StyledButton
            id="btn-recover-pass"
            type="submit"
            className="btn btn-primary submit-btn mb-3"
          >
            Send
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
