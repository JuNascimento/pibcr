/* eslint-disable react/prop-types */
import styled from "styled-components";

export const ArrowSvg = (props) => (
  <SvgIcon
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.color}
    transform={`rotate(${props.degrees})`}
  >
    <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
  </SvgIcon>
);

export const SvgIcon = styled.svg`
  margin-left: 0;
`;
