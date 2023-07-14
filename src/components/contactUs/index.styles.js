import styled from "styled-components";
import { devices } from "../../responsive";

export const Contact = styled.section`
  color: #ccc;
  background-color: #151922;
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;

  @media ${devices.mobile} {
    font-size: 5vw;
  }

  @media ${devices.tablet} {
    font-size: 4vw;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 80%;

  @media ${devices.mobile} {
    width: 90%;
  }

  @media ${devices.tablet} {
    width: 90%;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 50px;

  @media ${devices.mobile} {
    width: 90%;
  }

  @media ${devices.tablet} {
    width: 90%;
  }
`;

export const FormLabel = styled.label`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  border-radius: 20px;
  height: 15px;
  width: 100%;
  border: none;
  padding: 10px;
  font-family: "Poppins", "Open Sans", sans-serif;
`;

export const TextAreaField = styled.textarea`
  border-radius: 20px;
  height: 200px;
  width: 100%;
  border: none;
  padding: 10px;
  font-family: "Poppins", "Open Sans", sans-serif;
`;

export const Button = styled.input`
  width: 200px;
  padding: 15px;
  color: #151922;
  background-color: #ccc;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
