import * as S from "./Write.style";
import Position from "../Select/Position";
import ClubName from "../Select/ClubName";
import EmploymentType from "../Select/EmploymentType";
import MainWrite from "@/components/announcement/MainWrite/Write";
import { useRecoilState } from "recoil";
import {
  clubNameAtom,
  employmentTypeAtom,
  positionAtom,
  titleAtom,
  startDateAtom,
  endDateAtom,
  isOpenAtom,
} from "@/store/WriteAtom";
import { useEffect } from "react";

const Write = () => {
  const [clubName, setClubName] = useRecoilState(clubNameAtom);
  const [employmentType, setEmploymentType] =
    useRecoilState(employmentTypeAtom);
  const [position, setPosition] = useRecoilState(positionAtom);
  const [title, setTitle] = useRecoilState(titleAtom);
  const [startDate, setStartDate] = useRecoilState(startDateAtom);
  const [endDate, setEndDate] = useRecoilState(endDateAtom);
  const [isOpen, setIsOpen] = useRecoilState<boolean>(isOpenAtom);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  return (
    <S.MainContainer>
      <S.parentTitle>공고 작성하기</S.parentTitle>
      <S.titleContainer>
        <S.titleContent>
          <S.content>
            <S.contentTitle>채용 동아리</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <ClubName />
          {isOpen && clubName == "" && (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginTop: "5px",
                marginBottom: "-3.4%",
              }}
            >
              *필수 선택 항목입니다.*
            </div>
          )}

          <S.content>
            <S.contentTitle>채용 직급</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <EmploymentType />
          {isOpen && employmentType == "" && (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginTop: "5px",
                marginBottom: "-3.4%",
              }}
            >
              *필수 선택 항목입니다.*
            </div>
          )}

          <S.content>
            <S.contentTitle>채용 포지션</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <Position />
          {isOpen && position == "" && (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginTop: "5px",
                marginBottom: "-3.4%",
              }}
            >
              *필수 선택 항목입니다.*
            </div>
          )}

          <S.content>
            <S.contentTitle>채용 기간</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <S.selectContainer>
            <S.dateSelect
              isOpen={isOpen}
              startDate={startDate}
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleStartDateChange}
            ></S.dateSelect>
            <S.dateSign> ~ </S.dateSign>
            <S.dateSelect
              isOpen={isOpen}
              endDate={endDate}
              type="date"
              name="endDate"
              value={endDate}
              onChange={handleEndDateChange}
            ></S.dateSelect>
          </S.selectContainer>
          {isOpen && startDate == "" && (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginTop: "5px",
                marginBottom: "-3.4%",
              }}
            >
              *필수 선택 항목입니다.*
            </div>
          )}
          {isOpen && endDate == "" && (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginLeft: "50%",
                marginTop: "5px",
                marginBottom: "-3.4%",
              }}
            >
              *필수 선택 항목입니다.*
            </div>
          )}
        </S.titleContent>
      </S.titleContainer>
      <MainWrite />
    </S.MainContainer>
  );
};

export default Write;
