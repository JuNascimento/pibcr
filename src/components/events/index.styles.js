import styled from "styled-components";
import { devices } from "../../responsive";

export const EventsSubtitleLabel = styled.h3`
  color: #ccc;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
`;

export const EventsCategoryTitle = styled.h4`
  color: #ccc;
  font-size: 2vw;

  @media ${devices.mobile} {
    font-size: 4vw;
  }

  @media ${devices.tablet} {
    font-size: 4vw;
  }
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

  @media ${devices.mobile} {
    justify-content: center;
  }

  @media ${devices.tablet} {
    justify-content: center;
  }
`;

export const MonthTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  color: #393d45;
`;

export const EventImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const EventImage = styled.img`
  margin: 20px;
  cursor: zoom-in;
  width: 30%;

  @media ${devices.mobile} {
    width: 50vw;
    margin: 20px;
  }

  @media ${devices.tablet} {
    width: 50vw;
    margin: 20px;
  }
`;

export const EventImageZoom = styled.img`
  width: 70vw;
  max-width: 600px;
  cursor: zoom-out;

  @media ${devices.mobile} {
    width: 90vw;
    /* margin: 20px; */
  }

  @media ${devices.tablet} {
    width: 85vw;
    /* margin: 20px; */
  }
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
