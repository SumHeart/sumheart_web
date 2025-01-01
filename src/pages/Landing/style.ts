import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.span`
  font-family: "White Angelica";
  font-size: 36px;
  color: #545454;
`;
