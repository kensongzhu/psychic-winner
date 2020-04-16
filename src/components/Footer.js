import React from "react";
import eifer from "../eifer_dark.png";
import edf from "../edf_dark.png";

const Footer = () => (
  <footer className="page-footer w-100">
    <div className="container-fluid container-lg">
      <div className="row mt-3 px-lg-5 py-1">
        <section className="col mb-3">
          <div className={"row no-gutters align-items-start mb-3 mb-lg-4"}>
            <a
              href={"https://www.eifer.kit.edu/"}
              className={"col-2 col-md-3 col-lg-2"}
            >
              <img src={eifer} alt={"eifer logo"} className={"img-fluid"} />
            </a>
            <a
              href={"https://www.myelectricnetwork.fr/"}
              className={"col-2 col-md-3 col-lg-2"}
            >
              <img src={edf} alt={"edf logo"} className={"img-fluid"} />
            </a>
          </div>
          <p>© 2020 Copyright - EDF. All rights reserved.</p>
        </section>

        <section className="col-md-2 col-lg-2 col-xl-2 mb-3">
          <h6 className="text-capitalize font-weight-bold text-white">About</h6>
          <hr className="divider d-none mb-3 mt-0 d-md-inline-block mx-auto" />

          <p>
            <a href="/">Terms and Conditions</a>
          </p>
          <p>
            <a href="/">Impressum</a>
          </p>
          <p>
            <a href="/">Datenschutzhinweise</a>
          </p>
        </section>

        <section className="col-md-2 col-lg-2 col-xl-2 mb-3">
          <h6 className="text-capitalize font-weight-bold text-white">
            Support
          </h6>
          <hr className="divider d-none mb-3 mt-0 d-md-inline-block mx-auto" />
          <p>
            <a href="/">
              <i className="fas fa-question-circle mr-2" />
              FAQs
            </a>
          </p>
          <p>
            <a href="mailto:info-calobs@eifer.org">
              <i className="fas fa-envelope mr-2" />
              Contact
            </a>
          </p>
        </section>

        <section className="col-md-2 col-lg-2 col-xl-2 mb-3">
          <h6 className="text-capitalize font-weight-bold text-white">
            Partners
          </h6>
          <hr className="divider d-none mb-3 mt-0 d-md-inline-block mx-auto" />
          <p>
            <a href="/">DALKIA</a>
          </p>
          <p>
            <a href="/">EDF R&D - France</a>
          </p>
          <p>
            <a href="/">EDF R&D - SA</a>
          </p>
        </section>
      </div>
    </div>
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
