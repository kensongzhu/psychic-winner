(this["webpackJsonpcalobs-ui"] = this["webpackJsonpcalobs-ui"] || []).push([
  [0],
  {
    16: function (e, a, t) {
      e.exports = t.p + "static/media/calobs.eadb60b9.svg";
    },
    17: function (e, a, t) {
      e.exports = t.p + "static/media/eifer.262a97ef.svg";
    },
    18: function (e, a, t) {
      e.exports = t.p + "static/media/edf.eff17a7c.svg";
    },
    21: function (e, a, t) {
      e.exports = t.p + "static/media/illustration.18356dda.svg";
    },
    22: function (e, a, t) {
      e.exports = t.p + "static/media/captcha.3328cd25.png";
    },
    23: function (e, a, t) {
      e.exports = t(34);
    },
    28: function (e, a, t) {},
    34: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(15),
        m = t.n(l),
        o = (t(28), t(5)),
        c = function () {
          return r.a.createElement(
            "footer",
            {
              className:
                "footer d-flex justify-content-center justify-content-lg-end py-4 f-semi-bold",
            },
            r.a.createElement(
              "a",
              { href: "/", className: "px-2 px-md-3 text-decoration-none" },
              "Datenschutzhinweise"
            ),
            r.a.createElement(
              "a",
              { href: "/", className: "px-2 px-md-3 text-decoration-none" },
              "Impressum"
            ),
            r.a.createElement(
              "a",
              { href: "/", className: "px-2 px-md-3 text-decoration-none" },
              "Terms and Conditions"
            ),
            r.a.createElement(
              "a",
              {
                href: "mailto:info-calobs@eifer.org",
                className: "pl-2 px-md-3 text-decoration-none",
              },
              "Contact"
            )
          );
        };
      c.displayName = "Footer";
      var s = c,
        i = t(16),
        u = t.n(i),
        d = t(17),
        f = t.n(d),
        p = t(18),
        E = t.n(p),
        b = t(6),
        N = function (e) {
          var a = e.description,
            t = e.to,
            n = e.where;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("span", { className: "mr-2" }, a),
            r.a.createElement(
              o.b,
              { to: t, className: "text-decoration-none" },
              n
            )
          );
        },
        g = function () {
          return r.a.createElement(
            "header",
            {
              className:
                "row no-gutters justify-content-between align-items-center",
            },
            r.a.createElement(
              "nav",
              {
                className:
                  "col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center",
              },
              r.a.createElement(
                "a",
                { href: "/" },
                r.a.createElement("img", {
                  src: u.a,
                  alt: "app",
                  className: "img-thumbnail border-0",
                })
              ),
              r.a.createElement(
                "a",
                { href: "https://www.eifer.kit.edu/" },
                r.a.createElement("img", {
                  src: f.a,
                  alt: "eifer",
                  className: "img-thumbnail border-0",
                })
              ),
              r.a.createElement(
                "a",
                { href: "https://www.myelectricnetwork.fr/" },
                r.a.createElement("img", {
                  src: E.a,
                  alt: "edf",
                  className: "img-thumbnail border-0",
                })
              )
            ),
            r.a.createElement(
              "div",
              {
                className:
                  "d-none d-md-flex align-items-center align-self-start py-5 f-semi-bold",
              },
              r.a.createElement(
                b.c,
                null,
                r.a.createElement(b.a, {
                  exact: !0,
                  path: "/",
                  render: function () {
                    return r.a.createElement(N, {
                      description: "Don't have an account?",
                      to: "join-now",
                      where: "Join Now",
                    });
                  },
                }),
                r.a.createElement(b.a, {
                  path: "/join-now",
                  render: function () {
                    return r.a.createElement(N, {
                      description: "Already have an account?",
                      to: "/",
                      where: "Sign in",
                    });
                  },
                }),
                r.a.createElement(b.a, {
                  path: "/forgot-password",
                  render: function () {
                    return r.a.createElement(N, {
                      description: "Back to",
                      to: "/",
                      where: "Sign in",
                    });
                  },
                })
              )
            )
          );
        };
      g.displayName = "Header";
      var h = g,
        w = t(21),
        v = t.n(w),
        y = function () {
          return r.a.createElement(
            "div",
            { className: "col-12 col-lg-6 row justify-content-center" },
            r.a.createElement("img", {
              src: v.a,
              alt: "illustration",
              className: "col-9 col-sm-8 col-lg-12 col-xl-9 d-none",
            }),
            r.a.createElement("div", { className: "hero" })
          );
        },
        x = t(9),
        j = function () {
          var e = Object(n.useState)("jon.snow@got.org"),
            a = Object(x.a)(e, 2),
            t = a[0],
            l = a[1],
            m = Object(n.useState)(""),
            c = Object(x.a)(m, 2),
            s = c[0],
            i = c[1],
            u = function (e) {
              "username" === e.target.name ? l("") : i("");
            },
            d = function (e) {
              "username" === e.target.name
                ? l(e.target.value)
                : i(e.target.value);
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "h1",
              { className: "f-bold mb-4 mb-md-6" },
              "Sign in"
            ),
            r.a.createElement(
              "form",
              {
                id: "loginform",
                method: "post",
                onSubmit: function (e) {
                  return e.preventDefault();
                },
                className: "calobs-form",
              },
              r.a.createElement(
                "fieldset",
                { className: "form-group mb-6" },
                r.a.createElement(
                  "label",
                  { className: "form-label", htmlFor: "login-username" },
                  "Username"
                ),
                r.a.createElement("input", {
                  id: "login-username",
                  type: "text",
                  className: "form-control",
                  name: "username",
                  placeholder: "Enter your username.",
                  onFocus: u,
                  onChange: d,
                  value: t,
                  required: !0,
                })
              ),
              r.a.createElement(
                "fieldset",
                { className: "form-group mb-6" },
                r.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex justify-content-between align-items-start form-label",
                  },
                  r.a.createElement(
                    "label",
                    { htmlFor: "login-password" },
                    "Password"
                  ),
                  r.a.createElement(
                    o.b,
                    {
                      to: "/forgot-password",
                      className: "text-decoration-none f-regular",
                    },
                    "Forgot password"
                  )
                ),
                r.a.createElement("input", {
                  id: "login-password",
                  type: "password",
                  className: "form-control",
                  name: "password",
                  placeholder: "Enter your password",
                  onFocus: u,
                  onChange: d,
                  value: s,
                  required: !0,
                })
              ),
              r.a.createElement(
                "div",
                { className: "d-flex justify-content-center" },
                r.a.createElement(
                  "button",
                  {
                    id: "btn-login",
                    type: "submit",
                    className: "btn btn-primary submit-btn my-1",
                  },
                  "Sign in"
                )
              )
            )
          );
        },
        F = t(22),
        C = t.n(F),
        S = function () {
          var e = Object(n.useState)("Choose..."),
            a = Object(x.a)(e, 2),
            t = a[0],
            l = a[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "h1",
              { className: "f-bold mb-4 mb-md-6" },
              "Join Now"
            ),
            r.a.createElement(
              "form",
              {
                method: "post",
                className: "calobs-form form-md",
                onSubmit: function (e) {
                  return e.preventDefault();
                },
              },
              r.a.createElement(
                "div",
                { className: "form-row" },
                r.a.createElement(
                  "div",
                  { className: "col-6 col-lg-6" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "first-name" },
                      "First name"
                    ),
                    r.a.createElement("input", {
                      id: "first-name",
                      type: "text",
                      className: "form-control",
                      name: "first-name",
                      placeholder: "First name",
                      required: !0,
                    })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "col-6 col-lg-6" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "last-name" },
                      "Last name"
                    ),
                    r.a.createElement("input", {
                      id: "last-name",
                      type: "text",
                      className: "form-control",
                      name: "last-name",
                      placeholder: "Last name",
                      required: !0,
                    })
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "form-row" },
                r.a.createElement(
                  "div",
                  { className: "col-6 col-lg-6" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "username" },
                      "Username"
                    ),
                    r.a.createElement("input", {
                      id: "username",
                      type: "text",
                      className: "form-control",
                      name: "username",
                      placeholder: "Username",
                      required: !0,
                    }),
                    r.a.createElement("span", { className: "form-focus" })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "col-6 col-lg-6" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "email" },
                      "Email"
                    ),
                    r.a.createElement("input", {
                      id: "email",
                      type: "email",
                      className: "form-control",
                      name: "email",
                      placeholder: "Email",
                      required: !0,
                    }),
                    r.a.createElement("span", { className: "form-focus" })
                  )
                )
              ),
              r.a.createElement(
                "fieldset",
                { className: "form-group" },
                r.a.createElement(
                  "label",
                  { className: "form-label", htmlFor: "company" },
                  "Company"
                ),
                r.a.createElement(
                  "select",
                  {
                    id: "company",
                    className: "form-control",
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                    value: t,
                  },
                  r.a.createElement(
                    "option",
                    { value: "Choose..." },
                    "Choose..."
                  ),
                  r.a.createElement(
                    "option",
                    { value: "Company 1" },
                    "Company 1"
                  ),
                  r.a.createElement(
                    "option",
                    { value: "Company 2" },
                    "Company 2"
                  ),
                  r.a.createElement(
                    "option",
                    { value: "Company 3" },
                    "Company 3"
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "form-row" },
                r.a.createElement(
                  "div",
                  { className: "col-6 col-lg-6" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "password" },
                      "Password"
                    ),
                    r.a.createElement("input", {
                      id: "password",
                      type: "password",
                      className: "form-control",
                      name: "password",
                      placeholder: "Password",
                      required: !0,
                    }),
                    r.a.createElement("span", { className: "form-focus" })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "col-6 col-lg-6" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "password-confirm" },
                      "Password confirmation"
                    ),
                    r.a.createElement("input", {
                      id: "password-confirm",
                      type: "password",
                      className: "form-control",
                      name: "password-confirm",
                      placeholder: "Password confirmation",
                      required: !0,
                    }),
                    r.a.createElement("span", { className: "form-focus" })
                  )
                )
              ),
              r.a.createElement(
                "div",
                {
                  className:
                    "form-row justify-content-between align-items-center",
                },
                r.a.createElement(
                  "div",
                  { className: "col-3" },
                  r.a.createElement("img", {
                    className: "img-fluid",
                    src: C.a,
                    alt: "captcha",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "col-9" },
                  r.a.createElement(
                    "fieldset",
                    { className: "form-group" },
                    r.a.createElement(
                      "label",
                      { className: "form-label", htmlFor: "captcha" },
                      "Captcha"
                    ),
                    r.a.createElement("input", {
                      id: "captcha",
                      type: "text",
                      className: "form-control",
                      name: "captcha",
                      required: !0,
                    })
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "custom-control custom-checkbox py-2" },
                r.a.createElement("input", {
                  type: "checkbox",
                  className: "custom-control-input",
                  id: "agree-terms",
                }),
                r.a.createElement(
                  "label",
                  {
                    className: "custom-control-label f-semi-bold",
                    htmlFor: "agree-terms",
                  },
                  "Agree to the Terms and Conditions and Privacy Policy"
                )
              ),
              r.a.createElement(
                "div",
                { className: "d-flex justify-content-center" },
                r.a.createElement(
                  "button",
                  {
                    id: "btn-recover-pass",
                    type: "submit",
                    className: "btn btn-primary submit-btn mb-3 mt-3",
                  },
                  "Start"
                )
              )
            )
          );
        },
        q = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "h1",
              { className: "f-bold mb-6" },
              "Access recovery"
            ),
            r.a.createElement(
              "form",
              {
                method: "post",
                onSubmit: function (e) {
                  return e.preventDefault();
                },
                className: "calobs-form",
              },
              r.a.createElement(
                "fieldset",
                { className: "form-group" },
                r.a.createElement(
                  "label",
                  { className: "form-label", htmlFor: "username-or-email" },
                  "Username / Email:"
                ),
                r.a.createElement("input", {
                  id: "username-or-email",
                  type: "text",
                  className: "form-control",
                  name: "username-or-email",
                  placeholder: "Username or Email",
                  required: !0,
                })
              ),
              r.a.createElement(
                "div",
                { className: "d-flex flex-wrap justify-content-center mt-6" },
                r.a.createElement(
                  "button",
                  {
                    id: "btn-recover-pass",
                    type: "submit",
                    className: "btn btn-primary submit-btn mb-3",
                  },
                  "Send"
                )
              )
            )
          );
        },
        k = function () {
          return r.a.createElement(
            "div",
            { className: "col-12 col-lg-6 row no-gutters" },
            r.a.createElement(
              "div",
              { className: "col-12 col-lg-10 col-xl-8" },
              r.a.createElement(
                b.c,
                null,
                r.a.createElement(b.a, { exact: !0, path: "/", component: j }),
                r.a.createElement(b.a, { path: "/join-now", component: S }),
                r.a.createElement(b.a, {
                  path: "/forgot-password",
                  component: q,
                })
              )
            )
          );
        };
      var P = function () {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement(
            "div",
            {
              id: "app",
              className:
                "container-fluid d-flex flex-column p-3 px-md-5 py-md-5",
            },
            r.a.createElement(
              "div",
              {
                className:
                  "app-wrapper position-relative d-flex flex-column bg-white flex-grow-1 px-3 px-md-6",
              },
              r.a.createElement(h, null),
              r.a.createElement(
                "main",
                {
                  className:
                    "row justify-content-center align-items-center flex-grow-1",
                },
                r.a.createElement(y, null),
                r.a.createElement(k, null)
              ),
              r.a.createElement(s, null)
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      m.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(P, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[23, 1, 2]],
]);
//# sourceMappingURL=main.8d63d998.chunk.js.map
