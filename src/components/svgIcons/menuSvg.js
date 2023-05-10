import styled from "styled-components";
import { devices } from "../../responsive";

export const OpenMenuSvg = () => (
  <MenuSvg fill="#ccc" viewBox="0 0 24 24">
    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
  </MenuSvg>
);

export const CloseMenuSvg = () => (
  <MenuSvg fill="#ccc" viewBox="0 0 50 50" transform="rotate(90)">
    <path d="M9.156 6.313 6.312 9.155 22.157 25 6.22 40.969 9.03 43.78 25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157z" />
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
