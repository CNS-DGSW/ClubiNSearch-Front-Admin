import React from "react";
import * as S from "./EmploymentType.style";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { employmentTypeAtom } from "@/store/WriteAtom";

const EmploymentType = () => {
  const [employmentType, setEmploymentType] =
    useRecoilState(employmentTypeAtom);

  const handleEmploymentTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEmploymentType(event.target.value);
  };
  return (
    <div>
      <S.employmentTypeSelect
        value={employmentType}
        onChange={handleEmploymentTypeChange}
      >
        <option>채용 직급을 선택해주세요.</option>
        <option value="INTERN">인턴</option>
        <option value="REGULAR">정규직</option>
      </S.employmentTypeSelect>
    </div>
  );
};

export default EmploymentType;
