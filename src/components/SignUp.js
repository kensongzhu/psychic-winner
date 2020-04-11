import React from "react";
import { Link } from "react-router-dom";
import captcha from "../captcha.jpg";

const SignUp = () => {
  const handleSubmit = (evt) => evt.preventDefault();

  return (
    <>
      {/*<h2 className={"text-center form-title mb-4"}>Sign Up</h2>*/}
      <form
        method={"post"}
        className={"calobs-form form-md"}
        onSubmit={handleSubmit}
      >
        {/* First Name and Last Name  */}
        <div className={"form-row"}>
          <div className={"col-12 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="first-name">
                First name
              </label>
              <input
                id="first-name"
                type="text"
                className="form-control px-0"
                name="first-name"
                placeholder="First name"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
          <div className={"col-12 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="last-name">
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                className="form-control px-0"
                name="last-name"
                placeholder="Last name"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
        </div>

        {/* Username and Email  */}
        <div className={"form-row"}>
          <div className={"col-12 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-control px-0"
                name="username"
                placeholder="Username"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
          <div className={"col-12 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control px-0"
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
          <select id="company" className="form-control px-0">
            <option selected>Choose...</option>
            <option value={"Company 1"}>Company 1</option>
            <option value={"Company 2"}>Company 2</option>
            <option value={"Company 3"}>Company 3</option>
          </select>
        </fieldset>

        {/* Password and Password confirmation   */}
        <div className={"form-row"}>
          <div className={"col-12 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control px-0"
                name="password"
                placeholder="Password"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
          <div className={"col-12 col-lg-6"}>
            <fieldset className={"form-group"}>
              <label className={"form-label"} htmlFor="password-confirm">
                Password confirmation
              </label>
              <input
                id="password-confirm"
                type="password"
                className="form-control px-0"
                name="password-confirm"
                placeholder="Password confirmation"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
        </div>

        {/* Captcha */}
        <div className={"form-row justify-content-between"}>
          <label className={"form-label col-12 mb-2"} htmlFor="captcha">
            Captcha
          </label>
          <div className={"col-2 col-md-3"}>
            <img className={"image-fluid"} src={captcha} alt={"captcha"} />
          </div>
          <div className={"col-7 col-md-8"}>
            <fieldset className={"form-group"}>
              <input
                id="captcha"
                type="text"
                className="form-control px-0"
                name="captcha"
                required
              />
              <span className={"form-focus"} />
            </fieldset>
          </div>
        </div>

        <div className="custom-control custom-checkbox py-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="agree-terms"
          />
          <label className="custom-control-label" htmlFor="agree-terms">
            Agree to the Terms and Conditions and Privacy Policy
          </label>
        </div>

        <button
          id="btn-recover-pass"
          type="submit"
          className="btn btn-primary btn-lg submit-btn mb-3 w-100 mt-3"
        >
          Sign up
        </button>

        <div className={"text-center my-3"}>
          <span className={"mr-1"}>Have an account?</span>
          <Link to="/">{"Sign in"}</Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
