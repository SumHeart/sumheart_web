import * as S from "./style";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const handleConfirm = (): void => {
    navigate("/result");
  };
  return (
    <S.Layout>
      <Header type="list" />
      <S.QusetionListContainer>
        <S.Tag>#01</S.Tag>
        <span onClick={handleConfirm}>서로의 첫만남은 어땠나요?</span>
      </S.QusetionListContainer>
    </S.Layout>
  );
};

export default List;
