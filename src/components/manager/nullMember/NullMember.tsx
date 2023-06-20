import Image from "next/image";
import React from "react";
import NUllImage from "@/asset/managerPage/NullBox.svg";
import * as S from "./NullMember.style";

const NullMember = () => {
  return (
    <S.MainContainer>
      <nav>
        <Image src={NUllImage} alt="ddd" />
        <S.NullTitle>Null...</S.NullTitle>
        <S.NullContext>맴버가 없거나 평가 과정이 없습니다.</S.NullContext>
      </nav>
    </S.MainContainer>
  );
};

export default NullMember;
