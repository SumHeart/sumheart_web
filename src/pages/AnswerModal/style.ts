import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

export const Modal = styled.div`
  margin-top: auto;
  background-color: white;
  padding: 39px 35px;
  width: 100%;
  height: 30%;
  background-image: url(${BackgroundImg});
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 24px;
`;

export const AnswerContainer = styled.input`
  margin-top: 40px;
  border-radius: 8px;
  height: 70%;
  padding: 10px 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 41px;
`;

export const Button = styled.button`
  width: 49%;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
`;

export const BackBtn = styled(Button)`
  background-color: white;
  border: 2px solid #cbe6f8;
`;

export const OkBtn = styled(Button)`
  background-color: #cbe6f8;
`;
