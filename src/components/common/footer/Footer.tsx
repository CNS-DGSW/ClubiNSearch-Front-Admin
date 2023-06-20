import * as S from "./FooterStyle";

const Footer = () => {
  return (
    <S.MainFooter>
      <S.ContentWrapNav>
        <nav>
          <S.title>서비스</S.title>
          <S.ContextWrap>
            <S.Context>공지사항</S.Context>
            <S.Context>자주 묻는 질문</S.Context>
          </S.ContextWrap>
        </nav>
        <nav>
          <S.title>동아리</S.title>
          <S.ContextWrap>
            <S.subTitle>동아리 소개</S.subTitle>
            <S.Context>CNS</S.Context>
            <S.Context>B1nd</S.Context>
            <S.Context>Ducami</S.Context>
            <S.Context>Alt</S.Context>
            <S.Context>3D</S.Context>
          </S.ContextWrap>
        </nav>
        <nav>
          <S.title>문의</S.title>
          <S.ContextWrap>
            <S.subTitle>문의사항</S.subTitle>
          </S.ContextWrap>
        </nav>
        <nav>
          <S.title>고객센터</S.title>
          <S.ContextWrap>
            <S.subTitle>버그 접수</S.subTitle>
            <S.Context>전화 : 010-1234-5678</S.Context>
            <S.Context>이메일 : DGSW2023@dgsw.hs.kr</S.Context>
          </S.ContextWrap>
        </nav>
      </S.ContentWrapNav>
    </S.MainFooter>
  );
};

export default Footer;
