import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  background-image: url(${BackgroundImg});
  width: 100vw;
  height: 100vh;
  position: fixed;
  font-family: "Nanum DdoBagDdoBag";
`;

export const QusetionListContainer = styled.div`
  display: flex;
  padding: 77px 16px;
  gap: 16px;
  font-size: 24px;
`;
export const Tag = styled.span`
  color: #00aaff;
`;
