import styled from "styled-components";
import { devices } from "../../responsive";

export const Celebrations = styled.section`
  color: #ccc;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  font-size: 1.4vw;
  flex-direction: row;

  @media ${devices.mobile} {
    font-size: 3vw;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  @media ${devices.tablet} {
    font-size: 3vw;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }
`;

export const CelebrationsTitle = styled.h2`
  border-left: 1px solid #ccc;
  padding: 0 0 0 10px;
`;

export const CelebrationsInfo = styled.h3`
  a {
    text-decoration: underline;
  }

  a:visited {
    color: #ccc;
  }
`;

export const CelebrationItemList = styled.ul`
  padding: 0;
`;

export const CelebrationItem = styled.li`
  list-style-type: none;
  font-weight: 200;

  @media ${devices.mobile} {
    text-align: center;
  }

  @media ${devices.tablet} {
    text-align: center;
  }
`;
