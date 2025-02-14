import React from "react";
import * as S from "./style";
import Cacao from "../../assets/cacaoLogo.svg";

const Login = () => {
  return (
    <S.Layout>
      <S.Login>
        <S.Logo src={Cacao} />
        <S.GoLogin>카카오 로그인</S.GoLogin>
      </S.Login>
    </S.Layout>
  );
};

export default Login;
