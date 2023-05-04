import styled from "styled-components";

export const Slider = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-height: 65vh;
  overflow: hidden;
  box-shadow: 0 0 10px #ccc;
`;

export const SliderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderText = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ccc;
  text-transform: uppercase;
  text-align: center;
`;

export const SliderTitle = styled.h2`
  font-weight: bold;
  font-size: 7vw;
`;

export const SliderLabel = styled.p`
  font-size: 2vw;
  font-weight: 200;
  letter-spacing: 5px;
`;

export const SliderImage = styled.img`
  /* opacity: ${(props) => (props.isHome ? "0.8" : "0.1")}; */
  max-height: 65vh;
`;
