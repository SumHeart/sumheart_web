import { useNavigate } from "react-router-dom";
import Otter1 from "../../assets/Otter1";
import * as S from "./style";
import Heart from "../../assets/heart.svg";

const Main = ({ userName }: { userName: string }) => {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate("/question-detail");
  };

  const handleListClick = () => {
    navigate("/list");
  };

  return (
    <S.Layout>
      <S.Header>
        <S.HighContainer>
          <S.Diamond>💎 250</S.Diamond>
          <S.FamilyInfo onClick={handleListClick}>
            <div>시연 🩷 윤서 🩷 민지 🩷 {userName} 가족</div>
            <div>
              가족이 된 지 <S.Days>2800</S.Days>일째
            </div>
          </S.FamilyInfo>
        </S.HighContainer>
      </S.Header>
      <S.Content>
        <S.ImgContainer>
          <img src={Heart} alt="Heart" />
        </S.ImgContainer>
        <Otter1 width={117} />
        <S.QuestionContainer onClick={handleQuestionClick}>
          <S.Question>서로의 첫 만남은 어땠나요?</S.Question>
        </S.QuestionContainer>
      </S.Content>
    </S.Layout>
  );
};

export default Main;
