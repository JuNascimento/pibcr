import styled, { createGlobalStyle } from "styled-components";
import { devices } from "./responsive";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #151922;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: #ccc;
  }
`;

export const PageContainer = styled.section`
  padding: 10px 0;
`;

export const PageContainerDark = styled(PageContainer)`
  box-shadow: 0 0 10px 0 #ccc;
`;

export const PageContainerLight = styled(PageContainer)`
  background-color: #ccc;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitleLabel = styled.h2`
  font-size: 3vw;
  text-align: center;

  @media ${devices.mobile} {
    font-size: 6vw;
  }

  @media ${devices.tablet} {
    font-size: 5vw;
  }
`;

export const PageTitleLabelDark = styled(PageTitleLabel)`
  color: #ccc;
`;

export const PageTitleLabelLight = styled(PageTitleLabel)`
  color: #393d45;
`;

export const IconTitle = styled.div`
  margin-left: 20px;
`;
