/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Month,
  EventsCategoryTitle,
  EventsContent,
  MonthTitle,
  EventImage,
  ModalContainer,
  EventImageZoom,
  EventImages,
} from "./index.styles";
import {
  PageContainerDark,
  PageTitle,
  PageTitleLabelDark,
  IconTitle,
} from "../../global.styles";
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
    <PageContainerDark>
      <PageTitle>
        <PageTitleLabelDark>Nossos eventos em 2023</PageTitleLabelDark>
        <IconTitle>
          <EventSvg />
        </IconTitle>
      </PageTitle>
      <EventsContent>
        <EventsCategoryTitle>Próximos</EventsCategoryTitle>
        {MONTHS.map((month, index) => {
          let isCurrentMonth = getCurrentMonth() <= index;
          if (isCurrentMonth) {
            return (
              <Month key={`month-${index}`} isActive={isCurrentMonth}>
                <MonthTitle>{month}</MonthTitle>
                <EventImages>
                  <EventImage
                    src="images/foto3.png"
                    onClick={() => onClick("images/foto3.png")}
                  />
                  <EventImage
                    src="images/foto3.png"
                    onClick={() => onClick("images/foto3.png")}
                  />
                  <EventImage
                    src="images/foto4.png"
                    onClick={() => onClick("images/foto4.png")}
                  />
                  <EventImage
                    src="images/foto5.png"
                    onClick={() => onClick("images/foto5.png")}
                  />
                </EventImages>
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
                <EventImages>
                  <EventImage
                    src="images/seminario-iniciacao-profetica.png"
                    onClick={() => onClick("images/foto3.png")}
                  />
                  <EventImage
                    src="images/foto4.png"
                    onClick={() => onClick("images/foto4.png")}
                  />
                  <EventImage
                    src="images/foto5.png"
                    onClick={() => onClick("images/foto5.png")}
                  />
                </EventImages>
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
    </PageContainerDark>
  );
};

export default EventsContainer;
