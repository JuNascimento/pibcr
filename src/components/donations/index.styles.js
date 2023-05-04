import styled from "styled-components";
import { devices } from "../../responsive";

export const Donations = styled.section`
  color: #ccc;
  background-color: #151922;
  letter-spacing: 1px;
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

export const DonationsText = styled.p`
  font-size: 1.2vw;
  width: 80%;
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

export const DonationItems = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;

  @media ${devices.mobile} {
    flex-direction: column;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const DonationItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  background-color: #ccc;
  color: #151922;
  border-radius: 10px;
  padding: 20px;

  h3,
  p {
    font-weight: 200;
  }

  h3 {
    border-bottom: 1px solid #151922;
  }

  @media ${devices.mobile} {
    width: 100%;
    margin: 40px 0;
  }

  @media ${devices.tablet} {
    width: 100%;
    margin: 40px 0;
  }
`;

export const DonationInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-size: 1vw;

  @media ${devices.mobile} {
    font-size: 1.5vw;
  }

  @media ${devices.tablet} {
    font-size: 1.5vw;
  }
`;

export const DonationItemInfo = styled.div`
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 80%;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  img {
    width: 10.5vw;

    @media ${devices.mobile} {
      width: 20.816vw;
    }

    @media ${devices.tablet} {
      width: 20.816vw;
    }
  }
`;

export const DonationInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1vw;
  margin: 0 10px;
  padding: 3px;
  text-align: center;
  letter-spacing: 1px;
  background-color: #ccc;
  border: 1px solid #999;
`;

export const DonationCopyButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: unset;
`;

export const DonationCopyPaste = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const IconSvg = styled.div`
  svg {
    width: 3.5vw;

    @media ${devices.mobile} {
      width: 3.5vw;
    }

    @media ${devices.tablet} {
      width: 80%;
    }
  }
`;
