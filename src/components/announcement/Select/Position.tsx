import React from "react";
import * as S from "./Position.style";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { positionAtom } from "@/store/WriteAtom";

const Position = () => {
  const [position, setPosition] = useRecoilState(positionAtom);

  const handlePositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPosition(event.target.value);
  };
  return (
    <div>
      <S.positionSelect value={position} onChange={handlePositionChange}>
        <option>포지션을 선택해주세요</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Designer">Designer</option>
      </S.positionSelect>
    </div>
  );
};

export default Position;
