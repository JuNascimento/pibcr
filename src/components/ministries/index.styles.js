import styled from "styled-components";

export const Ministries = styled.section`
  background-color: #ccc;
  padding: 10px 0;
`;

export const MinistriesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MinistriesTitleLabel = styled.h2`
  color: #393d45;
  font-size: 40px;
  text-align: center;
  margin-right: 20px;
`;

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
  width: 100%;
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
  justify-content: center;
  flex-direction: column;
`;

export const MinistryName = styled.h4`
  font-size: 22px;
`;

export const MinistryDescription = styled.div`
  width: 80%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MinistryDescriptionText = styled.p`
  text-align: ${(props) => (props.left ? "left" : "right")};
`;

export const MinistryLogo = styled.img`
  width: 200px;
`;

export const MinistryInfo = styled.div`
flex - direction: row;
width: 100 %;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;
