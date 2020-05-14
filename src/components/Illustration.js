import illustration from "../illustration.svg";
import React from "react";

const Illustration = () => (
  <div className={"col-12 col-lg-6 row justify-content-center"}>
    <img
      src={illustration}
      alt={"illustration"}
      className={"col-9 col-sm-8 col-lg-12 col-xl-9 d-none"}
    />
    <div className={"hero"} />
  </div>
);

export default Illustration;
