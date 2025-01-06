import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const AnswerModal = () => {
  const navigate = useNavigate();
  const handleConfirm = (): void => {
    navigate("/result");
  };
  return (
    <S.Overlay>
      <S.Modal>
        <S.Title>서로의 첫 만남은 어땠나요?</S.Title>
        <S.AnswerContainer placeholder="답변해주세요" />
        <S.ButtonContainer>
          <S.BackBtn>취소</S.BackBtn>
          <S.OkBtn onClick={handleConfirm}>확인</S.OkBtn>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
};

export default AnswerModal;
