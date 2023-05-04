import styled from "styled-components";
import { devices } from "../../responsive";

export const Welcome = styled.section`
  color: #151922;
  background-color: #ccc;
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;

  @media ${devices.mobile} {
    font-size: 5vw;
  }

  @media ${devices.tablet} {
    font-size: 4vw;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1.2vw;
  width: 70%;
  letter-spacing: 1px;
  line-height: 2;
  margin: 40px 0;

  @media ${devices.mobile} {
    font-size: 4vw;
  }

  @media ${devices.tablet} {
    font-size: 2.5vw;
  }
`;

export const WelcomeInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
