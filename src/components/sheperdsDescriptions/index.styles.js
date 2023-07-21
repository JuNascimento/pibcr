import styled from "styled-components";
import { devices } from "../../responsive";

export const Descriptions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Shepherd = styled.article`
  width: 80%;
  margin-bottom: 50px;

  @media ${devices.mobile} {
    width: 90%;
    margin-bottom: 100px;
  }

  @media ${devices.tablet} {
    width: 100%;
    margin-bottom: 100px;
  }

  @media ${devices.smallScreen} {
    margin-bottom: 100px;
  }
`;

export const Name = styled.h3`
  text-align: center;
  font-size: 30px;
  color: #ccc;
  font-weight: 400;

  @media ${devices.mobile} {
    font-size: 25px;
  }

  @media ${devices.tablet} {
    font-size: 25px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media ${devices.mobile} {
    flex-direction: column;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }

  @media ${devices.smallScreen} {
    flex-direction: column;
  }
`;

export const DescriptionText = styled.h4`
  width: 60%;
  font-size: 18px;
  color: #ccc;
  font-weight: 300;
  text-align: justify;

  @media ${devices.mobile} {
    width: 100%;
    font-size: 15px;
  }

  @media ${devices.tablet} {
    font-size: 15px;
  }

  @media ${devices.smallScreen} {
    font-size: 15px;
  }
`;

export const Photo = styled.img`
  border-radius: 25%;
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

export const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;
