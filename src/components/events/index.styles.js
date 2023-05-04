import styled from "styled-components";

export const Events = styled.section`
  padding: 10px 0;
  box-shadow: 0 0 10px #ccc;
`;

export const EventsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EventsTitleLabel = styled.h2`
  color: #ccc;
  font-size: 40px;
  text-align: center;
  margin-right: 20px;
`;

export const EventsSubtitleLabel = styled.h3`
  color: #ccc;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
`;

export const EventsCategoryTitle = styled.h4`
  color: #ccc;
  font-size: 35px;
`;

export const EventsContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Month = styled.article`
  padding: 25px;
  margin: 30px 0;
  background-color: #ccc;
  width: 80%;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const MonthTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  color: #393d45;
`;

export const EventImage = styled.img`
  margin: 0 20px;
  max-height: 200px;
  cursor: zoom-in;
`;

export const EventImageZoom = styled.img`
  width: 40%;
  cursor: zoom-out;
`;

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
  z-index: 10;
`;

export const CloseIcon = styled.div``;
