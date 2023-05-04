/* eslint-disable react/prop-types */
import { useState } from "react";
import { ScheduleSvg } from "../svgIcons/scheduleSvg";
import { ArrowSvg } from "../svgIcons/arrowSvg";
import {
  Schedule,
  ScheduleTitle,
  ScheduleTitleLabel,
  ScheduleInfo,
  DaysOfWeek,
  Week,
  WeekDayName,
  DaySchedule,
  WeekDayLabel,
} from "./index.styles";
import { schedule } from "./schedule";

const WEEKDAYS = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

const WeekDay = (props) => {
  const [toggleMatches, setToggleMatches] = useState(false);

  return (
    <DaysOfWeek>
      <WeekDayName onClick={() => setToggleMatches(!toggleMatches)}>
        <WeekDayLabel>{schedule[props.value]["day"]}</WeekDayLabel>
        <ArrowSvg degrees={toggleMatches ? 270 : 90} color={"#ccc"} />
      </WeekDayName>
      <DaySchedule showToggleClass={toggleMatches}>
        <ul>
          {schedule[props.value]["events"].map((value, index) => {
            return (
              <li
                key={`weekday-${schedule[props.value]["day"]}events-${index}`}
              >
                {value["startHour"]} - {value["name"]}
              </li>
            );
          })}
        </ul>
      </DaySchedule>
    </DaysOfWeek>
  );
};

const ScheduleContainer = () => {
  return (
    <Schedule>
      <ScheduleTitle>
        <ScheduleTitleLabel>Programação semanal</ScheduleTitleLabel>
        <ScheduleSvg />
      </ScheduleTitle>

      <ScheduleInfo>
        <Week>
          {WEEKDAYS.map((value, key) => {
            return <WeekDay key={`weekday-${key}`} value={value} />;
          })}
        </Week>
      </ScheduleInfo>
    </Schedule>
  );
};

export default ScheduleContainer;
