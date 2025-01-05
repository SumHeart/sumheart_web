import styled from "styled-components";
import Clude from "../assets/clude.png";
import Clude1 from "../assets/clude1.png";
import Clude2 from "../assets/clude2.png";
import Clude3 from "../assets/clude3.png";
import Clude4 from "../assets/clude4.png";
import Clude5 from "../assets/clude5.png";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import Sun1 from "../assets/sun1.png";
import BackgroundImg from "../assets/backgroundImg.png";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum DdoBagDdoBag", sans-serif;
`;

const Modal = styled.div`
  margin-top: auto;
  background-color: white;
  padding: 39px 35px;
  width: 100%;
  height: 70%;
  background-image: url(${BackgroundImg});
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 50px;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 41px;
`;

const Button = styled.button`
  width: 49%;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
`;

const BackBtn = styled(Button)`
  background-color: white;
  border: 2px solid #cbe6f8;
`;

const OkBtn = styled(Button)`
  background-color: #cbe6f8;
`;

const FeelModal = () => {
  const images = [
    Clude,
    Clude1,
    Clude2,
    Clude3,
    Clude4,
    Clude5,
    Moon,
    Sun,
    Sun1,
  ];

  return (
    <Overlay>
      <Modal>
        <Title>먼저 오늘의 기분을 선택해주세요.</Title>
        <ImgContainer>
          {images.map((img, index) => (
            <ImgWrapper key={index}>
              <Img src={img} alt={`Mood ${index + 1}`} />
            </ImgWrapper>
          ))}
        </ImgContainer>
        <ButtonContainer>
          <BackBtn>취소</BackBtn>
          <OkBtn>확인</OkBtn>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};

export default FeelModal;
