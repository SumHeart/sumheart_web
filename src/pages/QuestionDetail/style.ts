import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 27px;
`;

export const Title = styled.span`
  padding-top: 36px;
  text-align: center;
  font-size: 24px;
`;
export const QuestionContainer = styled.div`
  padding-top: 109px;
`;
export const Question = styled.span`
  font-size: 30px;
`;
export const TagContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #8c8c8c;
  padding-bottom: 45px;
`;
export const AnswerContainer = styled.div`
  padding-bottom: 20px;
  font-size: 22px;
`;

export const Name = styled.span`
  font-size: 22px;
`;

export const Answer = styled.div`
  font-size: 20px;
`;

export const CenteredAnswer = styled(Answer)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3c3c3c;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    z-index: -1;
  }
`;
