import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.div`
  width: 70%;
  height: 8%;
  background-color: #ffe812;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
`;

export const GoLogin = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
