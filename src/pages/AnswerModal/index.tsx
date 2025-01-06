import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const AnswerModal = () => {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleConfirm = (): void => {
    if (answer.trim() === "") {
      alert("답변을 입력해주세요.");
      return;
    }
    localStorage.setItem("userAnswer", answer);
    navigate("/result");
  };

  return (
    <S.Overlay>
      <S.Modal>
        <S.Title>서로의 첫 만남은 어땠나요?</S.Title>
        <S.AnswerContainer
          placeholder="답변해주세요"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <S.ButtonContainer>
          <S.BackBtn>취소</S.BackBtn>
          <S.OkBtn onClick={handleConfirm}>확인</S.OkBtn>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
};

export default AnswerModal;
