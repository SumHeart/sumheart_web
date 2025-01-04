import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Header from "../../components/Header";
import Otter1 from "../../assets/Otter1";
import NameModal from "../NameModal";

const ConntextFamily = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextPage = () => {
    setIsModalOpen(false);
    navigate("/write-name");
  };

  return (
    <S.Layout>
      <Header type="logo" />
      <S.Main>
        <S.TextContainer>
          <span>가족 연결 후</span>
          <span>썸하트를 시작해 보세요.</span>
        </S.TextContainer>
        <Otter1 width={100} />
        <S.CodeTextContainer>
          <span>나의 코드 복사</span>
          <S.MyCode>ABCSWFS</S.MyCode>
        </S.CodeTextContainer>
        <S.ShareBtn>초대장 보내기</S.ShareBtn>
        <S.OrContainer>
          <S.Line />
          <span>or</span>
          <S.Line />
        </S.OrContainer>
        <S.ConnectBtn onClick={handleOpenModal}>
          가족 코드로 연결하기
        </S.ConnectBtn>
      </S.Main>
      {isModalOpen && (
        <NameModal onClose={handleCloseModal} onNext={handleNextPage} />
      )}
    </S.Layout>
  );
};

export default ConntextFamily;
