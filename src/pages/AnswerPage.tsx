import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import BackgroundImg from "../assets/backgroundImg.png";
import Clude from "../assets/clude.png";
import Clude1 from "../assets/clude1.png";
import Clude2 from "../assets/clude2.png";
import Clude3 from "../assets/clude3.png";
import Chat from "../assets/chat.png";
import { useNavigate } from "react-router-dom";

const Layout = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
`;

const MoodImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 27px;
`;

const Title = styled.span`
  padding-top: 30px;
  text-align: center;
  font-size: 24px;
`;

const QuestionContainer = styled.div`
  padding-top: 60px;
`;

const Question = styled.span`
  font-size: 30px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #8c8c8c;
  padding-bottom: 45px;
`;

const AnswerContainer = styled.div`
  padding-bottom: 20px;
  font-size: 22px;
`;

const Name = styled.span`
  font-size: 22px;
`;

const Answer = styled.div`
  font-size: 20px;
`;

export const CenteredAnswer = styled(Answer)`
  text-align: center;
`;

const MembersDetail = [
  {
    id: 2,
    name: "철이",
    answer: "미애와 처음 만났을땐 심장이 멎는줄 알았다. 아이들과 만났을때가 참 그립다",
  },
  {
    id: 3,
    name: "미애",
    answer: "우리 애기들과 처음 만났을때를 잊을 수 없지. 말로 표현할 수 없을만큼 좋았어.",
  },
  {
    id: 4,
    name: "아인",
    answer: "기억이 안나는데...",
  },
];

const AnswerPage = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/chat");
  };

  const storedImage = localStorage.getItem("selectedMoodImage") || Clude1; // 기본값으로 Clude1 사용
  const storedName = localStorage.getItem("userName") || "영은"; // 기본값으로 '영은' 사용
  const storedAnswer = localStorage.getItem("userAnswer") || "답변이 없습니다."; // 기본값 설정

  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;

  return (
    <Layout>
      <Header type="logo" withClose />
      <Main>
        <Title>우리 가족 일기</Title>
        <ImageContainer>
          <MoodImage src={storedImage} alt="Mood" />{" "}
          {/* 로컬 스토리지에서 가져온 이미지 */}
          <MoodImage src={Clude} alt="Mood" />
          <MoodImage src={Clude2} alt="Mood" />
          <MoodImage src={Clude3} alt="Mood" />
        </ImageContainer>
        <QuestionContainer>
          <Question>서로의 첫 만남은 어땠나요?</Question>
          <TagContainer>
            <span>#1번째 질문</span>
            <span>{formattedDate}</span>
          </TagContainer>
          <AnswerContainer>
            <Name>{storedName}</Name>
            <Answer>{storedAnswer}</Answer>
          </AnswerContainer>
          {MembersDetail.map((detail) => (
            <AnswerContainer key={detail.id}>
              <Name>{detail.name}</Name>
              <Answer>{detail.answer}</Answer>
            </AnswerContainer>
          ))}
        </QuestionContainer>
      </Main>
      <Icon onClick={handleChatClick}>
        <img src={Chat} alt="Chat" />
      </Icon>
    </Layout>
  );
};

export default AnswerPage;
