import styled from "styled-components";

export const CarouselList = styled.ul`
  display: "flex";
  overflow: "auto";
  scroll-snap-type: "x mandatory";
`;

export const CarouselItem = styled.li`
  width: 100px;
  background-color: "aqua";
  font-size: "50px";
  width: "250px";
  height: "250px";
  flex-shrink: 0;
  color: "#fff";
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;
