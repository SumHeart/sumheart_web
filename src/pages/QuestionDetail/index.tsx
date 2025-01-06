import * as S from "./style";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import FeelModal from "../FeelModal";

const MembersDetail = [
  {
    id: 1,
    name: "영은",
    answer: "이곳을 눌러 답변해 주세요.",
    realAnswer: "그냥 그랫어요",
  },
  {
    id: 2,
    name: "윤서",
    answer: "상대방의 답변이 궁금하다면 오늘 질문에 먼저 답변해 주세요.",
    realAnswer: "그냥 그랫어요",
  },
  {
    id: 3,
    name: "시연",
    answer: "상대방의 답변이 궁금하다면 오늘 질문에 먼저 답변해 주세요.",
    realAnswer: "그냥 그랫어요",
  },
  {
    id: 4,
    name: "민지",
    answer: "상대방의 답변이 궁금하다면 오늘 질문에 먼저 답변해 주세요.",
    realAnswer: "그냥 그랫어요",
  },
];

const QuestionDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [, setUserName] = useState("영은");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
      MembersDetail[0].name = storedName;
    }
  }, []);

  const handleAnswerClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;

  return (
    <S.Layout>
      <Header type="logo" withClose />
      <S.Main>
        <S.Title>우리 가족 일기</S.Title>
        <S.QuestionContainer>
          <S.Question>서로의 첫 만남은 어땠나요?</S.Question>
          <S.TagContainer>
            <span>#1번째 질문</span>
            <span>{formattedDate}</span>
          </S.TagContainer>
          {MembersDetail.map((detail) => (
            <S.AnswerContainer key={detail.id}>
              <S.Name>{detail.name}</S.Name>
              {detail.id === 1 ? (
                <S.Answer onClick={handleAnswerClick}>{detail.answer}</S.Answer>
              ) : (
                <S.CenteredAnswer>
                  상대방의 답변이 궁금하다면
                  <br />
                  오늘 질문에 먼저 답변해 주세요.
                </S.CenteredAnswer>
              )}
            </S.AnswerContainer>
          ))}
        </S.QuestionContainer>
      </S.Main>
      {showModal && <FeelModal onClose={handleCloseModal} />}
    </S.Layout>
  );
};

export default QuestionDetail;
