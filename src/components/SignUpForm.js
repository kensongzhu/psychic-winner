import React, { useState } from "react";
import captcha from "../captcha.png";

const SignUpForm = () => {
  const [company, setCompany] = useState("Choose...");
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <>
      <h1 className={"f-bold mb-4 mb-md-6"}>Join Now</h1>
      <form
        method={"post"}
        className={"calobs-form form-md"}
        onSubmit={handleSubmit}
      >
        {/* First Name and Last Name  */}
        <div className={"form-row"}>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="first-name">
                First name
              </label>
              <input
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
              <input
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
              <input
                id="username"
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
        </div>

        <fieldset className="form-group">
          <label className={"form-label"} htmlFor="company">
            Company
          </label>
          <select
            id="company"
            className="form-control"
            onChange={(evt) => setCompany(evt.target.value)}
            value={company}
          >
            <option value={"Choose..."}>Choose...</option>
            <option value={"Company 1"}>Company 1</option>
            <option value={"Company 2"}>Company 2</option>
            <option value={"Company 3"}>Company 3</option>
          </select>
        </fieldset>

        {/* Password and Password confirmation   */}
        <div className={"form-row"}>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
          <div className={"col-6 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="password-confirm">
                Password confirmation
              </label>
              <input
                id="password-confirm"
                type="password"
                className="form-control"
                name="password-confirm"
                placeholder="Password confirmation"
                required
              />
              <span className={"form-focus"} />
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
              <input
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
          <input
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
          <button
            id="btn-recover-pass"
            type="submit"
            className="btn btn-primary submit-btn mb-3 mt-3"
          >
            Start
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
