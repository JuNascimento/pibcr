import styled from "styled-components";
import { devices } from "../../responsive";

export const OpenMenuSvg = () => (
  <MenuSvg fill="#ccc" viewBox="0 0 24 24">
    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
  </MenuSvg>
);

export const CloseMenuSvg = () => (
  <MenuSvg fill="#ccc" viewBox="0 0 24 24" transform="rotate(90)">
    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
  </MenuSvg>
);

export const MenuSvg = styled.svg`
  display: none;

  @media ${devices.mobile} {
    display: block;
    position: absolute;
    left: 2%;
    width: 8%;
    max-width: 80px;
  }

  @media ${devices.tablet} {
    display: block;
    position: absolute;
    left: 2%;
    width: 8%;
    max-width: 80px;
  }
`;
