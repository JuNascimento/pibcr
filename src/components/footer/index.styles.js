import styled from "styled-components";
import { devices } from "../../responsive";

export const LogoImage = styled.img`
  width: 50%;
  max-width: 200px;
  padding-bottom: 20px;

  @media ${devices.mobile} {
    width: 70%;
    max-width: 300px;
    padding-bottom: 0px;
  }

  @media ${devices.tablet} {
    width: 70%;
    max-width: 300px;
    padding-bottom: 0px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: space-between;
  height: 20vh;
  flex-direction: row;
  font-size: 10px;
  color: #ccc;
  border-top: 1px solid #ccc;

  @media ${devices.mobile} {
    justify-content: center;
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }

  @media ${devices.tablet} {
    justify-content: center;
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;

export const FooterDivision = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.mobile} {
    width: 80%;
    text-align: center;
    height: 100%;
    margin: 10px 0;
  }

  @media ${devices.tablet} {
    width: 80%;
    text-align: center;
    height: 100%;
    margin: 10px 0;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const FooterText = styled.h3`
  font-size: 13px;
  font-weight: 200;
  text-align: center;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  cursor: pointer;
  font-weight: 400;

  @media ${devices.mobile} {
    justify-content: center;
  }

  @media ${devices.tablet} {
    justify-content: center;
  }
`;

export const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
