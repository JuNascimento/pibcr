import styled from "styled-components";
import { devices } from "../../responsive";

export const Subtitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SubtitleText = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
  width: 80%;
  font-weight: 400;

  a {
    color: #ccc;
  }
`;

export const Emphasis = styled.span`
  font-weight: 600;
`;

export const MinistriesDuty = styled.ul`
  list-style: none;
  text-align: left;
`;

export const MinistriesDutyItem = styled.li`
  line-height: 40px;
`;

export const MinistriesDescription = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MinistriesDescriptionLabel = styled.h3`
  text-align: center;
  font-size: 30px;
`;

export const Ministry = styled.article`
  padding: 50px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${devices.mobile} {
    padding: 50px 30px;
  }
`;

export const MinistryName = styled.h4`
  font-size: 22px;
`;

export const MinistryDescription = styled.div`
  width: 50%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    width: 70%;
  }

  @media ${devices.tablet} {
    width: 70%;
  }
`;

export const MinistryDescriptionText = styled.p`
  text-align: ${(props) => (props.left ? "left" : "right")};

  @media ${devices.mobile} {
    text-align: center;
  }
`;

export const MinistryLogo = styled.img`
  width: 200px;

  @media ${devices.mobile} {
    width: 30%;
  }

  @media ${devices.tablet} {
    width: 30%;
  }
`;

export const MinistryInfo = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
