import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackgroundImg from "../assets/backgroundImg.png";

const WriteName = ({ setName }: { setName: (name: string) => void }) => {
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleSubmit = () => {
    if (inputName.trim() === "") {
      alert("이름을 입력해주세요!");
      return;
    }
    setName(inputName);
    navigate("/main");
  };

  return (
    <Layout>
      <Header type="logo" />
      <Container>
        <Title>이름을 입력하세요</Title>
        <Input
          placeholder="올바르게 입력해야합니다!"
          value={inputName}
          onChange={handleInputChange}
        />
        <SubmitButton onClick={handleSubmit} disabled={inputName.trim() === ""}>
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
