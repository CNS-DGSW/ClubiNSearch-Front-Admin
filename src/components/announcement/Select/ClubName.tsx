import React from "react";
import * as S from "./ClubName.style";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { clubNameAtom } from "@/store/WriteAtom";

const ClubName = () => {
  const [clubName, setClubName] = useRecoilState(clubNameAtom);

  const handleClubNameChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setClubName(event.target.value);
  };
  return (
    <div>
      <S.clubNameSelect value={clubName} onChange={handleClubNameChange}>
        <option>소속 동아리를 선택해주세요</option>
        <option value="CNS">CNS</option>
        <option value="B1ND">B1nd</option>
        <option value="DUCAMI">두카미</option>
        <option value="삼디">3D</option>
        <option value="ALT">ALT</option>
      </S.clubNameSelect>
    </div>
  );
};

export default ClubName;
