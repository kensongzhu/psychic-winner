import React from "react";
import { FooterLink } from "../Elements/StyledLink";

import eifer from "../eifer.png";
import edf from "../edf.png";

const Footer = () => (
  <footer
    className={
      "footer row justify-content-center justify-content-lg-between py-4 f-semi-bold"
    }
  >
    <div
      className={
        "col-12 col-lg-auto order-1 order-lg-0 row no-gutters align-items-center text-center text-lg-left"
      }
    >
      <div className={"col-12 col-lg-auto"}>
        <a href={"https://www.eifer.kit.edu/"}>
          <img src={eifer} alt={"eifer"} className={"img-thumbnail border-0"} />
        </a>
        <a href={"https://www.myelectricnetwork.fr/"}>
          <img src={edf} alt={"edf"} className={"img-thumbnail border-0"} />
        </a>
      </div>

      <span className={"copyright col-12 col-lg-auto mx-1 f-regular"}>
        © 2020 Copyright - EDF, all rights reserved.
      </span>
    </div>

    <div
      className={
        "col-12 col-lg-auto text-center text-lg-right align-self-lg-end"
      }
    >
      <FooterLink href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
        Privacy Policy
      </FooterLink>
      <FooterLink href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
        Imprint
      </FooterLink>
      <FooterLink href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
        Terms and Conditions
      </FooterLink>
      <FooterLink
        href="mailto:info-calobs@eifer.org"
        className={"pl-2 pl-md-3 text-decoration-none"}
      >
        Contact
      </FooterLink>
    </div>
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
