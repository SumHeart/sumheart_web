import styled from "styled-components";
import Header from "../components/Header";
import BackGroundImg from "../assets/backgroundImg.png";

const WriteName = () => {
  return (
    <Layout>
      <Header type="logo" />
      <Container>
        <Title>이름을 입력하세요</Title>
        <Input placeholder="올바르게 입력해야합니다!" />
        <SubmitButton>확인</SubmitButton>
      </Container>
    </Layout>
  );
};

export default WriteName;

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackGroundImg});
`;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 20px;
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
`;
