import React from "react";

const Footer = () => (
  <footer
    className={
      "footer d-flex justify-content-center justify-content-lg-end py-4 f-semi-bold"
    }
  >
    <a href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
      Datenschutzhinweise
    </a>
    <a href={"/"} className={"px-2 px-md-3 text-decoration-none"}>
      Impressum
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
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
