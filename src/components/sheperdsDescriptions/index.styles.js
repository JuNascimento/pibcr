import styled from "styled-components";

export const Descriptions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Shepherd = styled.article`
  width: 80%;
`;

export const Name = styled.h3`
  text-align: center;
  font-size: 35px;
  color: #ccc;
  font-weight: 400;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DescriptionText = styled.h4`
  width: 60%;
  font-size: 20px;
  color: #ccc;
  font-weight: 300;
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-color: #ccc;
`;
