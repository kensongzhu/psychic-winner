import React, { useState } from "react";
import captcha from "../captcha.png";
import StyledButton from "../Elements/StyledButton";
import { StyledInput, StyledSelect } from "../Elements/StyledInput";

const SignUpForm = () => {
  const [company, setCompany] = useState("Choose...");
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <div className={"w-100"}>
      <form
        method={"post"}
        className={"calobs-form form-md"}
        onSubmit={handleSubmit}
      >
        <h1 className={"form-title"}>Join Now</h1>
        {/* First Name and Last Name  */}
        <div className={"form-row"}>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="first-name">
                First name
              </label>
              <StyledInput
                id="first-name"
                type="text"
                className="form-control"
                name="first-name"
                placeholder="First name"
                required
              />
            </fieldset>
          </div>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="last-name">
                Last name
              </label>
              <StyledInput
                id="last-name"
                type="text"
                className="form-control"
                name="last-name"
                placeholder="Last name"
                required
              />
            </fieldset>
          </div>
        </div>

        {/* Username and Email  */}
        <div className={"form-row"}>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="username">
                Username
              </label>
              <StyledInput
                id="username"
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                required
              />
            </fieldset>
          </div>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="email">
                Email
              </label>
              <StyledInput
                id="email"
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </fieldset>
          </div>
        </div>

        <fieldset className="form-group">
          <label className={"form-label"} htmlFor="company">
            Company
          </label>
          <StyledSelect
            id="company"
            className="form-control"
            onChange={(evt) => setCompany(evt.target.value)}
            value={company}
          >
            <option value={"Choose..."}>Choose...</option>
            <option value={"Company 1"}>Company 1</option>
            <option value={"Company 2"}>Company 2</option>
            <option value={"Company 3"}>Company 3</option>
          </StyledSelect>
        </fieldset>

        {/* Password and Password confirmation   */}
        <div className={"form-row"}>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="password">
                Password
              </label>
              <StyledInput
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
            </fieldset>
          </div>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="password-confirm">
                Password confirmation
              </label>
              <StyledInput
                id="password-confirm"
                type="password"
                className="form-control"
                name="password-confirm"
                placeholder="Password confirmation"
                required
              />
            </fieldset>
          </div>
        </div>

        {/* Captcha */}
        <div className={"form-row justify-content-between align-items-center"}>
          <div className={"col-3"}>
            <img className={"img-fluid"} src={captcha} alt={"captcha"} />
          </div>
          <div className={"col-9"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="captcha">
                Captcha
              </label>
              <StyledInput
                id="captcha"
                type="text"
                className="form-control"
                name="captcha"
                required
              />
            </fieldset>
          </div>
        </div>

        <div className="custom-control custom-checkbox py-2">
          <StyledInput
            type="checkbox"
            className="custom-control-input"
            id="agree-terms"
          />
          <label
            className="custom-control-label f-semi-bold"
            htmlFor="agree-terms"
          >
            Agree to the Terms and Conditions and Privacy Policy
          </label>
        </div>

        <div className={"d-flex justify-content-center"}>
          <StyledButton
            id="btn-recover-pass"
            type="submit"
            className="btn btn-primary submit-btn mb-3 mt-3"
          >
            Register
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
