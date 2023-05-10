import styled from "styled-components";
import { devices } from "../../responsive";

export const Youtube = styled.section`
  background-color: #ccc;
  color: #151922;
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

export const YoutubeText = styled.p`
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

export const YoutubeVideo = styled.div`
  height: 22.5vw;
  width: 40vw;
  margin: 0 50px;

  @media ${devices.mobile} {
    margin: 50px 0;
    height: 45vw;
    width: 90vw;
  }

  @media ${devices.tablet} {
    margin: 50px 0;
    height: 45vw;
    width: 80vw;
  }
`;

export const YoutubeThumbs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    flex-direction: column;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;
