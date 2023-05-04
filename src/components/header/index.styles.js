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

export const LiveIcon = styled.svg`
  -webkit-animation: flickerAnimation 2s infinite;
  -moz-animation: flickerAnimation 2s infinite;
  -o-animation: flickerAnimation 2s infinite;
  animation: flickerAnimation 2s infinite;

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: center;
  flex-direction: column;
  height: 20vh;

  @media ${devices.mobile} {
    justify-content: center;
    flex-direction: row;
  }

  @media ${devices.tablet} {
    justify-content: center;
    flex-direction: row;
  }
`;

export const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  display: none;
  border: none;

  @media ${devices.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    background-color: #151922;
    opacity: 1;
    z-index: 999;
  }

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    background-color: #151922;
    opacity: 1;
    z-index: 999;
  }
`;

export const MenuLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 9;
`;

export const MenuLink = styled.p`
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  padding: 10px;
  text-align: center;
  color: #ccc;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    width: 100%;
    font-size: 3vw;
  }

  @media ${devices.tablet} {
    width: 100%;
    font-size: 3vw;
  }

  &:hover {
    background-color: #393d45;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${devices.mobile} {
    display: none;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;
