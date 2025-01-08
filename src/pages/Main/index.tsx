import { useNavigate } from "react-router-dom";
import Otter1 from "../../assets/Otter1";
import * as S from "./style";
import Heart from "../../assets/heart.svg";
import { useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [diamonds, setDiamonds] = useState(250);
  const [hasUserAnswer, setHasUserAnswer] = useState(false);
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedDiamonds = localStorage.getItem("diamonds");
    const userAnswer = localStorage.getItem("userAnswer");

    if (storedName) {
      setUserName(storedName);
    }

    if (storedDiamonds) {
      setDiamonds(parseInt(storedDiamonds, 10));
    } else {
      localStorage.setItem("diamonds", diamonds.toString());
    }

    if (userAnswer) {
      setDiamonds((prevDiamonds) => prevDiamonds + 5);
      localStorage.setItem("diamonds", (diamonds + 5).toString());
      setHasUserAnswer(true);
    }

    const intervalId = setInterval(() => {
      localStorage.removeItem("userAnswer");
      localStorage.removeItem("diamonds");
      setDiamonds(0);
    }, 300000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem("diamonds", diamonds.toString());
  }, [diamonds]);

  const handleQuestionClick = () => {
    if (hasUserAnswer) {
      navigate("/result");
    } else {
      navigate("/question-detail");
    }
  };

  const handleListClick = () => {
    navigate("/list");
  };

  return (
    <S.Layout>
      <S.Header>
        <S.HighContainer>
          <S.Diamond>💎 {diamonds}</S.Diamond>
          <S.FamilyInfo onClick={handleListClick}>
            <div>철이(아빠) 🩷 미애(엄마) 🩷 아인 🩷 {userName} 가족</div>
            <div>
              가족이 된 지 <S.Days>2800</S.Days>일째
            </div>
          </S.FamilyInfo>
        </S.HighContainer>
      </S.Header>
      <S.Content>
        <S.ImgContainer>
          <S.HeartImage src={Heart} alt="Heart" />
        </S.ImgContainer>
        <S.AnimatedOtterContainer>
          <Otter1 width={117} />
        </S.AnimatedOtterContainer>
        <S.QuestionContainer onClick={handleQuestionClick}>
          <S.Question>서로의 첫 만남은 어땠나요?</S.Question>
        </S.QuestionContainer>
      </S.Content>
    </S.Layout>
  );
};

export default Main;
