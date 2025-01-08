import React, { useState, useEffect } from "react";
import * as S from "./style";
import Header from "../../components/Header";
import Arrow from "../../assets/arrow.png";
import Send from "../../assets/send.png";
import { useNavigate } from "react-router-dom";

interface Comment {
  author: string;
  text: string;
}

const ChatPage = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/main");
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("chatComments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      const newComment = { author: "나", text: inputValue };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setInputValue("");

      localStorage.setItem("chatComments", JSON.stringify(updatedComments));
    }
  };

  return (
    <S.Layout>
      <Header type="logo" />
      <S.Main>
        <S.HeaderContainer>
          <S.Img src={Arrow} alt="Arrow" onClick={handleChatClick} />
          <S.TextContainer>
            <span>#1번째 질문</span>
            <span>서로의 첫 만남은 어땠나요?</span>
          </S.TextContainer>
        </S.HeaderContainer>

        <S.OtherChatContainer>
          <span>미애</span>
          <S.Chat>아인아... 기억이 안 난다니...</S.Chat>
        </S.OtherChatContainer>
        <S.OtherChatContainer>
          <span>아인</span>
          <S.Chat>기억이 안 나는걸 어떠캐...</S.Chat>
        </S.OtherChatContainer>
        <S.OtherChatContainer>
          <span>철이</span>
          <S.Chat>ㅋㅋㅋㅋㅋ</S.Chat>
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
