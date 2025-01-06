import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Header";
import Arrow from "../../assets/arrow.png";
import Send from "../../assets/send.png";

interface Comment {
  author: string;
  text: string;
}

const ChatPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      setComments([...comments, { author: "나", text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <S.Layout>
      <Header type="logo" />
      <S.Main>
        <S.HeaderContainer>
          <S.Img src={Arrow} alt="Arrow" />
          <S.TextContainer>
            <span>#1번째 질문</span>
            <span>서로의 첫 만남은 어땠나요?</span>
          </S.TextContainer>
        </S.HeaderContainer>
        <S.OtherChatContainer>
          <span>윤서</span>
          <S.Chat>우리가 별로엿어??ㅠㅠ</S.Chat>
        </S.OtherChatContainer>
        {comments.map((comment, index) =>
          comment.author === "나" ? (
            <S.MyChatContainer key={index}>
              <span>나</span>
              <S.MyChat>{comment.text}</S.MyChat>
            </S.MyChatContainer>
          ) : (
            <S.OtherChatContainer key={index}>
              <span>{comment.author}</span>
              <S.Chat>{comment.text}</S.Chat>
            </S.OtherChatContainer>
          ),
        )}

        <S.InputContainer>
          <S.Input
            placeholder="댓글달기..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <img
            src={Send}
            width={30}
            height={30}
            onClick={handleSendClick}
            style={{ cursor: "pointer" }}
            alt="Send"
          />
        </S.InputContainer>
      </S.Main>
    </S.Layout>
  );
};

export default ChatPage;