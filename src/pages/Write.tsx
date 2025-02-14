import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BackgroundImg from "../assets/backgroundImg.png";

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
    <Layout>
      <Header type="logo" />
      <Container>
        <Title>{title}</Title>
        <Input
          placeholder={placeholder}
          value={input}
          onChange={handleInputChange}
        />
        <SubmitButton onClick={handleSubmit} disabled={input.trim() === ""}>
          확인
        </SubmitButton>
      </Container>
    </Layout>
  );
};

export default WriteName;

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 210px;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

const SubmitButton = styled.button`
  width: 100px;
  padding: 5px 0;
  background-color: #cbe6f8;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  &:disabled {
    background-color: #d3e5f2;
    cursor: not-allowed;
  }
`;
