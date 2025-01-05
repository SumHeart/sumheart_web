import * as S from "./style";
import Header from "../../components/Header";
import { useState } from "react";
import FeelModal from "../FeelModal";
import { useNavigate } from "react-router-dom";

const MembersDetail = [
  {
    id: 1,
    name: "시연",
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
    name: "영은",
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
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    // 여기서 선택된 기분을 처리할 수 있습니다 (예: API 호출 등)
    navigate("/question-answer");
  };

  return (
    <S.Layout>
      <Header type="logo" withClose />
      <S.Main>
        <S.Title>우리 가족 일기</S.Title>
        <S.QuestionContainer>
          <S.Question>서로의 첫 만남은 어땠나요?</S.Question>
          <S.TagContainer>
            <span>#1번째 질문</span>
            <span>2024.12.29</span>
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
      {showModal && (
        <FeelModal onClose={handleCloseModal} onConfirm={handleConfirm} />
      )}
    </S.Layout>
  );
};

export default QuestionDetail;
