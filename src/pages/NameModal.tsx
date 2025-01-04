import styled from "styled-components";

interface NameModalProps {
  onClose: () => void;
  onNext: () => void;
}

const NameModal = ({ onClose, onNext }: NameModalProps) => {
  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>가족 코드를 입력하세요.</Title>
        <Input placeholder="가족 코드를 입력해주세요." />
        <SubmitButton onClick={onNext}>다음</SubmitButton>
      </Modal>
    </Overlay>
  );
};

export default NameModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  width: 70%;
  max-width: 400px;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #555;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
  outline: none;
  font-family: "Nanum DdoBagDdoBag";
`;

const SubmitButton = styled.button`
  width: 30%;
  padding: 7px 0;
  background-color: #99cdf0;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #7fbce0;
  }
`;
