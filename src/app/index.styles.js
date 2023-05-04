import styled from "styled-components";
import { devices } from "../responsive";

export const App = styled.section`
  width: 100vw;

  @media ${devices.none} {
    display: none;
  }
`;
