import styled from "styled-components";
import { devices } from "../../responsive";

export const ScrollToTopContainer = styled.div`
  background-color: #151922;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  bottom: 50px;
  position: sticky;
  margin-left: 90vw;

  @media ${devices.mobile} {
    margin-left: 80vw;
  }
`;
