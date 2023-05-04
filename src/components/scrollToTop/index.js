import React from "react";
import { ScrollToTopContainer } from "./index.styles";
import { ArrowSvg } from "../svgIcons/arrowSvg";

const ScrollToTop = () => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollToTopContainer onClick={() => onClick()}>
      <ArrowSvg degrees={270} color={"#ccc"} />
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
