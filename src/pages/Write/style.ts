import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 210px;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

export const SubmitButton = styled.button`
  width: 100px;
  padding: 5px 0;
  background-color: #cbe6f8;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  &:disabled {
    background-color: #d3e5f2;
    cursor: not-allowed;
  }
`;
