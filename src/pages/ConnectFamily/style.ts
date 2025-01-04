import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  font-family: "Nanum DdoBagDdoBag";
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 36px 0 36px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  padding-bottom: 98px;
`;
export const CodeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
  font-size: 24px;
`;
export const MyCode = styled.a`
  font-family: "Pretendard-Regular" !important;
  font-size: 18px;
  color: black;
  text-decoration: underline;
  padding-bottom: 60px;
`;
export const ShareBtn = styled.button`
  background-color: #cbe6f8;
  width: 100%;
  font-size: 20px;
`;
export const OrContainer = styled.div`
  display: flex;
  padding: 13px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #b4b4b4;
  font-size: 16px;
  font-family: "Pretendard-Regular" !important;
`;
export const Line = styled.div`
  width: 43%;
  border-bottom: 1px solid #b4b4b4;
`;
export const ConnectBtn = styled.button`
  background-color: white;
  border: 1px solid #cbe6f8;
  width: 100%;
  font-size: 20px;
`;
