import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.png";

export const Layout = styled.main`
  background-image: url(${BackgroundImg});
  width: 100vw;
  height: 100vh;
  position: fixed;
  font-family: "Nanum DdoBagDdoBag";
`;

export const Img = styled.img`
  position: absolute;
  left: 0;
`;

export const Main = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 30px 17px;
  align-items: center;
  justify-content: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;
export const OtherChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 27px;
  font-size: 20px;
`;
export const Chat = styled.span`
  margin-top: 3px;
  background-color: #ececec;
  padding: 2px 10px;
  border-radius: 8px;
  width: fit-content;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7%;
  background-color: white;
`;
export const Input = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  padding: 0 20px;
  font-family: "Nanum DdoBagDdoBag";
  font-size: 24px;

  &:focus {
    outline: none;
  }
`;

export const MyChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 27px;
  font-size: 20px;
`;

export const MyChat = styled.span`
  margin-top: 3px;
  background-color: #ececec;
  padding: 2px 10px;
  border-radius: 8px;
  width: fit-content;
`;
