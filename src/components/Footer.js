import React from "react";
// import eifer from "../eifer.svg";
// import edf from "../edf.svg";

import eifer from "../eifer.png";
import edf from "../edf.png";

const Footer = () => (
  <footer
    className={
      "footer row justify-content-center justify-content-lg-end py-4 f-semi-bold"
    }
  >
    <div
      className={
        "col-12 col-lg-5 order-1 order-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center"
      }
    >
      <a href={"https://www.eifer.kit.edu/"}>
        <img src={eifer} alt={"eifer"} className={"img-thumbnail border-0"} />
      </a>
      <a href={"https://www.myelectricnetwork.fr/"}>
        <img src={edf} alt={"edf"} className={"img-thumbnail border-0"} />
      </a>
      <span className={"copyright mx-1 f-regular"}>
        © 2020 Copyright - EDF, all rights reserved.
      </span>
    </div>
    <div
      className={"col-12 col-lg-7 text-center text-lg-right align-self-lg-end"}
    >
      <a href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
        Privacy Policy
      </a>
      <a href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
        Imprint
      </a>
      <a href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
        Terms and Conditions
      </a>
      <a
        href="mailto:info-calobs@eifer.org"
        className={"pl-2 px-md-3 text-decoration-none"}
      >
        Contact
      </a>
    </div>
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
