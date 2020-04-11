import React from "react";
import eifer from "../eifer.png";
import edf from "../edf.png";

const Footer = () => (
  <footer className="page-footer w-100">
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
          <h6 className="text-uppercase font-weight-bold">EIFER</h6>
          <hr className="divider mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <i>European Institute for Energy Research</i> is a research
            institute devoted to energy and the environment in Karlsruhe.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
          <h6 className="text-uppercase font-weight-bold">Activities</h6>
          <hr className="divider mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <a href="/">Activities 1</a>
          </p>
          <p>
            <a href="/">Activities 2</a>
          </p>
          <p>
            <a href="/">Activities 3</a>
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
          <h6 className="text-uppercase font-weight-bold">Help</h6>
          <hr className="divider mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <a href="/">FAQs</a>
          </p>
          <p>
            <a href="/">Terms and Conditions</a>
          </p>
          <p>
            <a href="/">Impressum</a>
          </p>
          <p>
            <a href="/">Datenschutzhinweise</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
          <h6 className="text-uppercase font-weight-bold">Contact</h6>
          <hr className="divider mb-3 mt-0 d-inline-block mx-auto" />
          <p>
            <i className="fas fa-home mr-2" />
            Emmy-Noether-Straße 11, 76131, KA
          </p>
          <p>
            <i className="fas fa-envelope mr-2" />{" "}
            <a href="mailto:info-calobs@eifer.org">info-calobs@eifer.org</a>
          </p>
          <p>
            <i className="fas fa-phone mr-2" /> + 49 123 456 789
          </p>
          <p>
            <i className="fas fa-print mr-2" /> + 49 123 456 789
          </p>
        </div>
      </div>
    </div>
    {/*<hr className="deep-purple mx-4 my-1"/>*/}
    <div className="footer-copyright py-3 text-center">
      <div className={"d-flex justify-content-center align-items-center mb-1"}>
        <a
          href={"https://www.eifer.kit.edu/"}
          style={{ width: 50 }}
          className={"px-1"}
        >
          <img src={eifer} className={"img-fluid"} alt={"eifer site"} />
        </a>
        <a
          href={"https://www.myelectricnetwork.fr/"}
          style={{ width: 50 }}
          className={"px-1"}
        >
          <img src={edf} className={"img-fluid"} alt={"edf site"} />
        </a>
      </div>
      <div>© 2020 Copyright - EIFER. All rights reserved.</div>
    </div>
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
