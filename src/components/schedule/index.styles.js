import styled from "styled-components";
import { devices } from "../../responsive";

export const Schedule = styled.section`
  background-color: #ccc;
  padding: 10px 0;
`;

export const ScheduleTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScheduleTitleLabel = styled.h2`
  color: #393d45;
  font-size: 3vw;
  text-align: center;
  margin-right: 20px;

  @media ${devices.mobile} {
    font-size: 6vw;
  }

  @media ${devices.tablet} {
    font-size: 5vw;
  }
`;

export const ScheduleInfo = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Week = styled.section`
  width: 80%;
  margin: 30px 0;
`;

export const DaysOfWeek = styled.article`
  margin: 40px 0;
  padding: 40px;
  text-align: left;
  background-color: #151922;

  h3 {
    color: #ccc;
    font-size: 25px;
  }

  @media ${devices.mobile} {
    padding: 20px;
  }
`;

export const DaySchedule = styled.article`
  display: ${(props) => (props.showToggleClass ? "block" : "none")};
  color: #ccc;

  li {
    list-style: disc;
    padding: 10px;
  }
`;

export const WeekDayName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
`;

export const WeekDayLabel = styled.h3`
  width: 100%;
  text-align: left;
`;

export const EventItem = styled.li`
  list-style-type: none;
`;
