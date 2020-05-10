import illustration from "../illustration.svg";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Illustration = () => (
  <div className={"col-12 col-lg-6 row justify-content-center"}>
    <img
      src={illustration}
      alt={"illustration"}
      className={"col-9 col-sm-8 col-lg-12 col-xl-9 d-none"}
    />
    <TransitionGroup className={"w-100"}>
      <CSSTransition
        classNames="moveFromBottomFade"
        timeout={700}
        appear={true}
        exit={false}
        unmountOnExit={true}
      >
        <div className={"hero"} />
      </CSSTransition>
    </TransitionGroup>
  </div>
);

export default Illustration;
