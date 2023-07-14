import styled from "styled-components";
import { devices } from "../../responsive";
import { PageContainerDark } from "../../global.styles";

export const About = styled(PageContainerDark)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const SubtitleText = styled.h2`
  color: #ccc;
  font-size: 35px;
  text-align: center;
  font-weight: 500;

  a {
    color: #ccc;
  }
`;

export const MapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const Topic = styled.section``;

export const Description = styled.p`
  color: #ccc;
  text-align: center;
  width: 80%;
  font-size: 18px;
  font-weight: 200;
`;

export const Emphasis = styled.span`
  font-weight: 400;
  letter-spacing: 5px;
`;

export const Line = styled.hr`
  width: 70%;
  margin: 50px;
  border: 0.5px solid #ccc;
`;

export const Question = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  background-color: #ccc;
  color: #151922;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 0;

  @media ${devices.mobile} {
    width: 75%;
    margin: 40px 0;
  }

  @media ${devices.tablet} {
    width: 75%;
    margin: 40px 0;
  }
`;

export const QuestionInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: 600;
    border-bottom: 1px solid #151922;
    font-size: 20px;
    text-align: center;
    width: 100%;
  }

  p {
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  ul {
  }

  li {
    padding: 5px 0;
  }
`;

export const Number = styled.span`
  font-size: 60px;
  color: #ccc;
  font-weight: bold;
`;

export const DescriptionDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px 0;
  width: 80%;
`;

export const KnowMoreText = styled.h2`
  font-size: 25px;
  color: #ccc;
  font-weight: 300;
  margin-right: 20px;
  text-align: center;

  a {
    text-decoration: underline;
  }
`;

export const KnowMore = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: center;
`;
