import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as S from "./style";

interface Props {
  type: "name" | "petName";
}

const WriteName = ({ type }: Props) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setInput("");
  }, [type]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === "") {
      alert(
        type === "name"
          ? "이름을 입력해주세요!"
          : "반려몽의 이름을 입력해주세요!",
      );
      return;
    }

    if (type === "name") {
      localStorage.setItem("userName", input);
      navigate("/write-petname");
    } else {
      localStorage.setItem("petName", input);
      navigate("/main");
    }
  };

  const title =
    type === "name" ? "이름을 입력하세요" : "반려몽의 이름을 입력하세요";
  const placeholder =
    type === "name" ? "올바르게 입력해야합니다!" : "반려몽의 이름을 입력하세요";

  return (
    <S.Layout>
      <Header type="logo" />
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Input
          placeholder={placeholder}
          value={input}
          onChange={handleInputChange}
        />
        <S.SubmitButton onClick={handleSubmit} disabled={input.trim() === ""}>
          확인
        </S.SubmitButton>
      </S.Container>
    </S.Layout>
  );
};

export default WriteName;
