import * as S from "./signin.style";
import TitleBig from "@/asset/TitleBig.svg";
import Image from "next/image";
import { useState } from "react";
import API from "@/util/api";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

// 로그인
const signin = () => {
  const router = useRouter();

  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  // const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    API.post("/api/auth/login", {
      accountId: id,
      password: password,
    })
      .then((res) => {
        // 일단 로컬스토리지에 저장해두는데 좀 더 안전하게 바꿀 것
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);

        alert("로그인 성공");
        router.push('/')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <S.ContentWrapper>
        <S.TitleLogo alt="title" src={TitleBig} />
        <S.Title>관리자 로그인</S.Title>

        <S.AllWithoutTitle>
          <S.InputWrapper>
            <S.InputLabel>아이디</S.InputLabel>
            <S.Input
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.InputLabel>비밀번호</S.InputLabel>
            <S.Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </S.InputWrapper>

          <S.SubmitBtn type="submit" onClick={onSubmit}>
            로그인
          </S.SubmitBtn>

          <div>
            <S.GrayLink href="/signup">회원가입</S.GrayLink>
          </div>
        </S.AllWithoutTitle>
      </S.ContentWrapper>
    </>
  );
};
export default signin;
