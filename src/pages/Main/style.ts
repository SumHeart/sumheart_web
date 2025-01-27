import styled, { keyframes } from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
  background-image: url(${BackgroundImg});
  padding-top: 60px;
`;

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const HeartImage = styled.img`
  animation: ${shake} 0.5s ease-in-out infinite;
`;

const shakeAndPulse = keyframes`
  0%, 100% { 
    transform: rotate(0deg) scale(1); 
  }
  25% { 
    transform: rotate(3deg) scale(1.05); 
  }
  50% { 
    transform: rotate(-3deg) scale(0.95); 
  }
  75% { 
    transform: rotate(3deg) scale(1.03); 
  }
`;

export const AnimatedOtterContainer = styled.div`
  animation: ${shakeAndPulse} 3s ease-in-out infinite;
`;

export const Header = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #555;
`;

export const HighContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Diamond = styled.span`
  font-size: 25px;
  display: flex;
  align-items: center;
`;

export const FamilyInfo = styled.div`
  margin-left: auto;
  text-align: right;
  font-size: 18px;
`;

export const Days = styled.span`
  font-weight: bold;
  font-size: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 179px;
`;

export const ImgContainer = styled.div`
  padding-bottom: 45px;
`;

export const QuestionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #cbe6f8;
  border-radius: 8px;
  margin-top: 38px;
  text-align: center;
  padding: 30px 0;
`;

export const Question = styled.span`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

export const SubText = styled.span`
  font-size: 17px;
  color: #555;
`;
