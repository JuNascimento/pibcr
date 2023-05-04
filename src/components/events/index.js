/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Events,
  Month,
  EventsTitle,
  EventsTitleLabel,
  EventsCategoryTitle,
  EventsContent,
  MonthTitle,
  EventImage,
  ModalContainer,
  EventImageZoom,
} from "./index.styles";
import { EventSvg } from "../svgIcons/eventSvg";

const MONTHS = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const Modal = ({ children }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

const EventsContainer = () => {
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState(undefined);

  const getCurrentMonth = () => {
    let currentMonth = new Date().getMonth();

    return currentMonth;
  };

  const onClick = (picturePath) => {
    setShowPicture(!showPicture);
    setPicture(picturePath);
  };

  getCurrentMonth();
  return (
    <Events>
      <EventsTitle>
        <EventsTitleLabel>Nossos eventos em 2023</EventsTitleLabel>
        <EventSvg />
      </EventsTitle>
      <EventsContent>
        <EventsCategoryTitle>Próximos</EventsCategoryTitle>
        {MONTHS.map((month, index) => {
          let isCurrentMonth = getCurrentMonth() <= index;
          if (isCurrentMonth) {
            return (
              <Month key={`month-${index}`} isActive={isCurrentMonth}>
                <MonthTitle>{month}</MonthTitle>
                <div>
                  <EventImage
                    src="images/foto3.jpeg"
                    onClick={() => onClick("images/foto3.jpeg")}
                  />
                  <EventImage
                    src="images/foto4.jpeg"
                    onClick={() => onClick("images/foto4.jpeg")}
                  />
                  <EventImage
                    src="images/foto5.jpeg"
                    onClick={() => onClick("images/foto5.jpeg")}
                  />
                </div>
              </Month>
            );
          }
        })}
        <EventsCategoryTitle>Passados</EventsCategoryTitle>
        {MONTHS.map((month, index) => {
          let isCurrentMonth = getCurrentMonth() <= index;
          if (!isCurrentMonth) {
            return (
              <Month key={`month-${index}`} isActive={isCurrentMonth}>
                <MonthTitle>{month}</MonthTitle>
                <div>
                  <EventImage
                    src="images/seminario-iniciacao-profetica.jpeg"
                    onClick={() => onClick("images/foto3.jpeg")}
                  />
                  <EventImage
                    src="images/foto4.jpeg"
                    onClick={() => onClick("images/foto4.jpeg")}
                  />
                  <EventImage
                    src="images/foto5.jpeg"
                    onClick={() => onClick("images/foto5.jpeg")}
                  />
                </div>
              </Month>
            );
          }
        })}
      </EventsContent>
      {showPicture && (
        <Modal>
          <EventImageZoom src={picture} onClick={() => setShowPicture(false)} />
        </Modal>
      )}
    </Events>
  );
};

export default EventsContainer;
